import IconNextjs from "@components/elements/Icons/NextIcon/NextIcon";
import IconReact from "@components/elements/Icons/ReactIcon/ReactIcon";
import IconTypescript from "@components/elements/Icons/TypescriptIcon/TypescriptIcon";
import IconLogoJavascript from "@components/elements/Icons/JsIcon/JsIcon";
import IconSass from "@components/elements/Icons/SassIcon/SassIcon";
import IconHtml5 from "@components/elements/Icons/HtmlIcon/HtmlIcon";
import IconBxlMongodb from "@components/elements/Icons/MongoIcon/MongoIcon";
import IconDocker from "@components/elements/Icons/DockerIcon/DockerIcon";
import IconStorybook from "@components/elements/Icons/StorybookIcon/StorybookIcon";
import IconNodejs from "@components/elements/Icons/NodeIcon/NodeIcon";
import IconWeb3dotjs from "@components/elements/Icons/Web3Icon/Web3Icon";
import styles from "./Skills.module.scss";
import Icon488Git from "@components/elements/Icons/GitIcon/GitIcon";
import IconJirasoftware from "@components/elements/Icons/JiraIcon/JiraIcon";
import IconConfluence from "@components/elements/Icons/ConfluenceIcon/ConfluenceIcon";
import IconPostman from "@components/elements/Icons/PostmanIcon/PostmanIcon";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <ul>
        <li>
          <IconTypescript />
          Typescript
        </li>
        <li>
          <IconNextjs />
          Next.js
        </li>
        <li>
          <IconReact />
          React.js
        </li>

        <li>
          <IconNodejs />
          Node.js
        </li>
        <li>
          <Icon488Git />
          Git
        </li>
        <li>
          <IconWeb3dotjs />
          Web3.js
        </li>
        <li>
          <IconLogoJavascript />
          Javascript
        </li>
        <li>
          <IconSass />
          Sass
        </li>
        <li>
          <IconHtml5 />
          HTML
        </li>
        <li>
          <IconBxlMongodb />
          MongoDb
        </li>
        <li>
          <IconPostman />
          Postman
        </li>
        <li>
          <IconDocker />
          Docker
        </li>
        <li>
          <IconStorybook />
          Storybook
        </li>
        <li>
          <IconJirasoftware />
          Jira
        </li>
        <li>
          <IconConfluence />
          Confluence
        </li>
      </ul>
    </div>
  );
};

export default Skills;
