import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { toKebabCase } from "../../../lib/utils";

import { IOutageTabsProps } from "./IOutageTabs.types";
import { OUTAGE_TABS } from "./OutageTabs.constants";

import "./OutageTabs.styles.scss";
import { OutageCard } from "../../molecules/OutageCard";

export const OutageTabs = ({
  id,
  outageData,
  onCardClick,
}: IOutageTabsProps) => {
  return (
    <div id={id} className="outage-tabs">
      <h2 className="sr-only">Outage Tabs</h2>

      <Tabs defaultValue={toKebabCase(OUTAGE_TABS[0].label)} className="w-full">
        <TabsList className="w-full">
          {OUTAGE_TABS.map((tab, tabIndex) => {
            return (
              <TabsTrigger
                key={tabIndex}
                className="cursor-pointer"
                value={toKebabCase(tab.label)}>
                {tab.label}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {OUTAGE_TABS.map((tab, tabIndex) => {
          const CONTENT = outageData.OUTAGES.filter(
            (outage) => outage.type === toKebabCase(tab.label)
          ).map((outage) => (
            <OutageCard
              key={outage.incidentId}
              {...outage}
              onCardClick={onCardClick}
            />
          ));

          return (
            <TabsContent
              key={tabIndex}
              value={toKebabCase(tab.label)}
              className="outage-tabs__content">
              <ul>{CONTENT}</ul>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default OutageTabs;
