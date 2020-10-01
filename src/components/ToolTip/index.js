import React, { useState } from "react";
import styles from "./index.module.sass";

export default function ToolTip({ content }) {
  const [active, setActive] = useState(false);

  const handleViewToolTip = () => setActive(true);
  const handleCloseToolTip = () => setActive(false);

  return (
    <div className={styles.toolTipContainer}>
      <div
        className={styles.toolTipIcon}
        onMouseEnter={handleViewToolTip}
        onTouchStart={handleViewToolTip}
      >
        ?
      </div>
      {active && (
        <div className={styles.messageToolTip}>
          <div className={styles.closeButton}>
            <span
              className={`${styles.iconClose} material-icons`}
              onClick={handleCloseToolTip}
            >
              close
            </span>
          </div>
          {content}
          <div className={styles.topArrow}></div>
          <div className={styles.topArrowBack}></div>
        </div>
      )}
    </div>
  );
}
