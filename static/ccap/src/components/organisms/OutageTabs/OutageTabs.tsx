import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { toKebabCase } from "../../../lib/utils";

import { IOutageTabsProps } from "./IOutageTabs.types";
import { OUTAGE_TABS } from "./OutageTabs.constants";

import "./OutageTabs.styles.scss";
import { OutageCard } from "../../molecules/OutageCard";
import { Card, CardHeader, CardContent, CardFooter } from "../../ui/card";

export const OutageTabs = ({
  id,
  loading = true,
  outageData,
  onCardClick,
}: IOutageTabsProps) => {
  const uniqueOutageTypes = outageData?.OUTAGES
    ? Array.from(new Set(outageData.OUTAGES.map((outage) => outage.type))).map(
        (type) => ({ label: type })
      )
    : [
        {
          label: "General",
        },
      ];

  return (
    <div id={id} className="outage-tabs">
      <h2 className="sr-only">Outage Tabs</h2>

      <Tabs
        defaultValue={toKebabCase(uniqueOutageTypes[0].label ?? "")}
        className="w-full">
        <TabsList className="w-full">
          {uniqueOutageTypes.map((tab, tabIndex) => {
            return (
              <TabsTrigger
                key={tabIndex}
                className="cursor-pointer"
                value={toKebabCase(tab.label ?? "")}>
                {tab.label}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {loading ? (
          <Card className="outage-item gap-2 w-full">
            <CardHeader className="outage-item__header">
              <div className="animate-pulse h-5 w-full mb-1 rounded-full bg-gray-200" />

              <div className="animate-pulse h-5 w-full mb-1 rounded-full bg-gray-200" />
            </CardHeader>

            <CardContent className="outage-item__content">
              <div className="animate-pulse h-5 w-full mb-1 rounded-full bg-gray-200" />
            </CardContent>

            <CardFooter className="outage-item__footer">
              <div className="animate-pulse h-5 w-full rounded-full bg-gray-200" />

              <div className="animate-pulse h-5 w-full rounded-full bg-gray-200" />
            </CardFooter>
          </Card>
        ) : (
          uniqueOutageTypes.map((tab, tabIndex) => {
            const CONTENT = outageData.OUTAGES.filter((outage) => {
              return (
                toKebabCase(outage.type ?? "") === toKebabCase(tab.label ?? "")
              );
            }).map((outage) => (
              <OutageCard
                key={outage.incidentId}
                {...outage}
                onCardClick={onCardClick}
              />
            ));

            return (
              <TabsContent
                key={tabIndex}
                value={toKebabCase(tab.label ?? "")}
                className="outage-tabs__content">
                <ul>{CONTENT}</ul>
              </TabsContent>
            );
          })
        )}
      </Tabs>
    </div>
  );
};

export default OutageTabs;
