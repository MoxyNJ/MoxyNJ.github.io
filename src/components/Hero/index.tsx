import React from "react";

import { useTrail, animated } from "react-spring";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";

import HeroMain from "./img/work.svg";

import GithubIcon from "@site/static/icons/github.svg";
import JuejinIcon from "@site/static/icons/juejin.svg";
import RssIcon from "@site/static/icons/rss.svg";
import QqIcon from "@site/static/icons/qq.svg";
import WxIcon from "@site/static/icons/wx.svg";
import CsdnIcon from "@site/static/icons/csdn.svg";
import CloudMusicIcon from "@site/static/icons/cloud-music.svg";

import useBaseUrl from "@docusaurus/useBaseUrl";
import Button from "../Button";

import styles from "./styles.module.css";

const Hero = (): JSX.Element => {
  const {
    // 当前语言
    i18n: { currentLocale },
  } = useDocusaurusContext();

  // animation
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
  });

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={animatedTexts[0]} className={styles.hero_text}>
          Hi, 我是
          <span className={styles.intro__name}> Ninjee </span>
        </animated.div>
        <animated.p style={animatedTexts[1]}>
          <Translate
            id="homepage.hero.text"
            description="hero text"
            values={{
              algorithm: (
                <Link to="/docs/code/algorithm">
                  <Translate
                    id="hompage.hero.text.algorithm"
                    description="algorithm link label"
                  >
                    算法
                  </Translate>
                </Link>
              ),
              project: (
                <Link to="/docs/frontEnd/javascript">
                  <Translate
                    id="hompage.hero.text.project"
                    description="Project link label"
                  >
                    前端知识集锦
                  </Translate>
                </Link>
              ),
              links: (
                <Link to="/project">
                  <Translate
                    id="hompage.hero.text.link"
                    description="Link link label"
                  >
                    我的项目
                  </Translate>
                </Link>
              ),
            }}
          >
            {`见到你很高兴，推荐：{algorithm}、{project} 以及 {links}。
            在这里，记录了我学习过程中的所见所感所想，希望对你都有所帮助，也欢迎和我交流。`}
          </Translate>
        </animated.p>
        {/* {currentLocale === 'zh-CN' && (
          <animated.p style={animatedTexts[3]}>
            <Translate id='homepage.qqgroup1' description='qq group1'>
              QQ 群：x
            </Translate>
          </animated.p>
        )} */}
        <SocialLinks animatedProps={animatedTexts[4]} />
        {
          <animated.div style={animatedTexts[2]}>
            <Button isLink href={"./about"}>
              自我介绍
            </Button>
          </animated.div>
        }
      </div>
      <HeroMainImage />
    </animated.div>
  );
};

function SocialLinks({ animatedProps, ...props }) {
  return (
    <animated.div className={styles.social__links} style={animatedProps}>
      {/* <a href="./rss.xml" target="_blank">
        <RssIcon />
      </a> */}
      <a href="https://github.com/MoxyNJ" target="_blank">
        <GithubIcon />
      </a>
      <a href="https://juejin.cn/user/2005151873514024" target="_blank">
        <JuejinIcon />
      </a>
      {/* <a href="/" target="_blank">
        <CsdnIcon />
      </a> */}
      <a
        href="https://qm.qq.com/cgi-bin/qm/qr?k=XM2DFpRCmjKNtcVedXyQdclrLbByU0Vr&noverify=0"
        target="_blank"
      >
        <QqIcon />
      </a>
      <a href="" target="_blank">
        <WxIcon />
      </a>
      {/* <a href="/" target="_blank">
        <CloudMusicIcon />
      </a> */}
    </animated.div>
  );
}

function HeroMainImage() {
  return (
    <div className={styles.bloghome__image}>
      <HeroMain style={{ padding: "30px" }} />
    </div>
  );
}

export default Hero;
