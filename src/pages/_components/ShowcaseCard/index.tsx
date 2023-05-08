import React, { useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import copy from "copy-text-to-clipboard";
//import Image from '@theme/IdealImage';
import FavoriteIcon from "@site/src/components/svgIcons/FavoriteIcon";
import {
  Tags,
  TagList,
  type TagType,
  type User,
  type Tag,
} from "@site/src/data/users";
import { sortBy } from "@site/src/utils/jsUtils";
import Heading from "@theme/Heading";
import Tooltip from "../ShowcaseTooltip";
import styles from "./styles.module.css";
import { updateCopyCount } from "@site/src/api";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const TagComp = React.forwardRef<HTMLLIElement, Tag>(
  ({ label, color, description }, ref) => (
    <li ref={ref} className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{ backgroundColor: color }} />
    </li>
  )
);

function ShowcaseCardTag({ tags }: { tags: TagType[] }) {
  const tagObjects = tags.map((tag) => ({ tag, ...Tags[tag] }));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag)
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const id = `showcase_card_tag_${tagObject.tag}`;

        return (
          <Tooltip
            key={index}
            text={tagObject.description}
            anchorEl="#__docusaurus"
            id={id}
          >
            <TagComp key={index} {...tagObject} />
          </Tooltip>
        );
      })}
    </>
  );
}

function ShowcaseCard({ user, isDescription, copyCount, onCopy }) {
  const [paragraphText, setParagraphText] = useState(
    isDescription ? user.description : user.desc_cn
  );

  useEffect(() => {
    setParagraphText(isDescription ? user.description : user.desc_cn);
  }, [isDescription, user.description, user.desc_cn]);

  // 点击显示中文文本
  function handleParagraphClick() {
    if (paragraphText === user.description) {
      setParagraphText(user.desc_cn);
    } else {
      setParagraphText(user.description);
    }
  }
  const { i18n } = useDocusaurusContext();
  const currentLanguage = i18n.currentLocale;
  const userTitle = currentLanguage === "en" ? user.title_en : user.title;
  const userRemark = currentLanguage === "en" ? user.remark_en : user.remark;
  const userDescription =
    currentLanguage === "zh-Hans" ? paragraphText : user.desc_en;
  //const image = getCardImage(user);
  // 复制
  const [copied, setShowCopied] = useState(false);

  const handleCopyClick = useCallback(async () => {
    try {
      const updatedCount = await updateCopyCount(user.id);
      if (user.description) {
        copy(userDescription);
      }
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
      // Notify parent component to update the copy count
      onCopy(user.id, updatedCount);
    } catch (error) {
      console.error("Error updating copy count:", error);
    }
  }, [user.id]);
  // 将显示数据单位简化到 k
  const formatCopyCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + "k";
    }
    return count;
  };
  
  function ShowcaseCard(props) {
    const { user } = props;
    const [copied, setCopied] = React.useState(false);
  
    function handleCopyClick() {
      navigator.clipboard.writeText("https://chat.aiprm.top");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
      window.location.href = "https://chat.aiprm.top";
    }
  
    return (
      <li key={user.title} className="card shadow--md">
        {/* Rest of the component */}
        <button
          className={clsx(
            "button button--secondary button--sm",
            styles.showcaseCardSrcBtn
          )}
          type="button"
          onClick={handleCopyClick}
        >
          {copied ? (
            <Translate>已复制</Translate>
          ) : (
            <Translate>复制</Translate>
          )}
        </button>
      </li>
    );
  }
  
}

export default React.memo(ShowcaseCard);
