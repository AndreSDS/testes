import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { slugify } from "../../utils/slugfy";
import styles from "./styles.module.css";

export function Tabs({ children, initialTab }) {
  const [activeTab, setActiveTab] = useState(slugify(children[0].props.label));
  const router = useRouter();

  const isActiveTab = (tab) => {
    if (tab === activeTab) {
      return styles.current;
    } else {
      return "";
    }
  };

  const handleClick = (event, newActiveTab) => {
    event.preventDefault();
    const newActiveTablugfied = slugify(newActiveTab);
    setActiveTab(newActiveTablugfied);
  };

  useEffect(() => {
    if (initialTab.tab) {
      setActiveTab(initialTab.tab);
    }
  }, []);

  useEffect(() => {
    const url = `${router.pathname}?tab=${slugify(activeTab)}`;

    router.push(url, undefined, { shallow: true });
  }, [activeTab]);

  return (
    <div>
      <ul className={styles.tabs}>
        {children.map((tab) => {
          const { label } = tab.props;
          const labelSlugfied = slugify(label);

          return (
            <li data-testid={slugify(label )} className={isActiveTab(labelSlugfied)} key={label}>
              <a href="#" onClick={(event) => handleClick(event, label)}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>

      {children.map((child) => {
        const { label, children } = child.props;
        const labelSlugfied = slugify(label);

        if (labelSlugfied === activeTab) {
          return (
            <div data-testid="content" key={label} className={styles.content}>
              {children}
            </div>
          );
        }
      })}
    </div>
  );
}

Tabs.propTypes = {
  initialTab: PropTypes.object, // { tab: "tab-3" }
  children: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      children: PropTypes.any,
    })
  ).isRequired,
};

Tabs.defaultProps = {
  initialTab: {},
};
