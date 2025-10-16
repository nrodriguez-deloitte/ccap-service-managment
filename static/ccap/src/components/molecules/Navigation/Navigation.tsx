import React from "react";

import "./Navigation.styles.scss";
import NavigationButton from "../../atoms/NavigationButton";
import { INavigationProps } from "./Navigation.types";

const Navigation: React.FC<INavigationProps> = ({ setPage, page }) => {
  const NavigationItems = [
    {
      id: "ai-search",
      label: "AI Search",
      page: "home",
      ariaLabel: "Go to AI Search",
      renderIcon: (active: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none">
          <path
            d="M19.0005 2.00024V6.00024M21.0005 4.00024H17.0005M3.00049 16.0002V18.0002M4.00049 17.0002H2.00049M8.93743 14.5002C8.84815 14.1542 8.66777 13.8384 8.41505 13.5856C8.16232 13.3329 7.8465 13.1525 7.50043 13.0632L1.36543 11.4812C1.26076 11.4515 1.16864 11.3885 1.10304 11.3017C1.03744 11.2149 1.00195 11.1091 1.00195 11.0002C1.00195 10.8914 1.03744 10.7856 1.10304 10.6988C1.16864 10.612 1.26076 10.549 1.36543 10.5192L7.50043 8.93625C7.84638 8.84706 8.16212 8.66682 8.41483 8.41429C8.66754 8.16175 8.84799 7.84614 8.93743 7.50025L10.5194 1.36525C10.5488 1.26017 10.6118 1.16759 10.6987 1.10164C10.7857 1.0357 10.8918 1 11.0009 1C11.11 1 11.2162 1.0357 11.3031 1.10164C11.39 1.16759 11.453 1.26017 11.4824 1.36525L13.0634 7.50025C13.1527 7.84632 13.3331 8.16215 13.5858 8.41487C13.8385 8.66759 14.1544 8.84797 14.5004 8.93725L20.6354 10.5182C20.7409 10.5473 20.834 10.6103 20.9003 10.6973C20.9666 10.7844 21.0025 10.8908 21.0025 11.0002C21.0025 11.1097 20.9666 11.2161 20.9003 11.3032C20.834 11.3902 20.7409 11.4531 20.6354 11.4822L14.5004 13.0632C14.1544 13.1525 13.8385 13.3329 13.5858 13.5856C13.3331 13.8384 13.1527 14.1542 13.0634 14.5002L11.4814 20.6353C11.452 20.7403 11.389 20.8329 11.3021 20.8989C11.2152 20.9648 11.109 21.0005 10.9999 21.0005C10.8908 21.0005 10.7847 20.9648 10.6977 20.8989C10.6108 20.8329 10.5478 20.7403 10.5184 20.6353L8.93743 14.5002Z"
            stroke={active ? "#155E75" : "#71717A"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "map",
      label: "Map",
      page: "map",
      ariaLabel: "Go to Map",
      renderIcon: (active: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M8.71357 14H5.00357C4.7939 14.0001 4.58956 14.0661 4.41945 14.1886C4.24933 14.3112 4.12204 14.4841 4.05557 14.683L2.05157 20.683C2.00133 20.8333 1.98754 20.9934 2.01133 21.1501C2.03512 21.3068 2.09581 21.4556 2.1884 21.5842C2.28098 21.7128 2.40282 21.8176 2.54385 21.8899C2.68489 21.9622 2.84109 21.9999 2.99957 22H20.9996C21.1579 21.9999 21.314 21.9621 21.455 21.8899C21.5959 21.8177 21.7176 21.713 21.8102 21.5845C21.9028 21.456 21.9635 21.3074 21.9874 21.1508C22.0113 20.9942 21.9976 20.8343 21.9476 20.684L19.9476 14.684C19.8812 14.4848 19.7539 14.3115 19.5835 14.1888C19.4132 14.066 19.2085 13.9999 18.9986 14H15.2866M17.9995 8C17.9995 11.613 14.1305 15.429 12.6065 16.795C12.4322 16.9282 12.2189 17.0003 11.9995 17.0003C11.7801 17.0003 11.5668 16.9282 11.3925 16.795C9.86951 15.429 5.99951 11.613 5.99951 8C5.99951 6.4087 6.63165 4.88258 7.75687 3.75736C8.88209 2.63214 10.4082 2 11.9995 2C13.5908 2 15.1169 2.63214 16.2422 3.75736C17.3674 4.88258 17.9995 6.4087 17.9995 8ZM13.9995 8C13.9995 9.10457 13.1041 10 11.9995 10C10.8949 10 9.99951 9.10457 9.99951 8C9.99951 6.89543 10.8949 6 11.9995 6C13.1041 6 13.9995 6.89543 13.9995 8Z"
            stroke={active ? "#155E75" : "#71717A"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "outages",
      label: "Outages",
      page: "outages",
      ariaLabel: "Go to Outages",
      renderIcon: (active: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke={active ? "#155E75" : "#71717A"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "records",
      label: "Records",
      page: "records",
      ariaLabel: "Go to Records",
      renderIcon: (active: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M22 7L14.9 10.78C14.33 11.08 13.67 11.08 13.1 10.78L6 7M2 8V19C2 20.1 2.9 21 4 21H18M8 4H20C21.1046 4 22 4.89543 22 6V15C22 16.1046 21.1046 17 20 17H8C6.89543 17 6 16.1046 6 15V6C6 4.89543 6.89543 4 8 4Z"
            stroke={active ? "#155E75" : "#71717A"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "create-comms",
      label: "Create Comms",
      page: "create-comms",
      ariaLabel: "Go to Create Comms",
      renderIcon: (active: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M5 12H19M12 5V19"
            stroke={active ? "#155E75" : "#71717A"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav className="navigation">
      <ul>
        {NavigationItems.map((item) => {
          const isActive = page === item.page;
          return (
            <li key={item.id}>
              <NavigationButton
                icon={item.renderIcon(isActive)}
                aria-label={item.ariaLabel}
                active={isActive}
                onButtonClick={() => {
                  setPage(item.page);
                }}>
                {item.label}
              </NavigationButton>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
