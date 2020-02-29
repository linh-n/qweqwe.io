import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { selectCurrentLanguage } from "modules/ui/selectors";

const Logo = styled(NavLink)`
  font-size: 2em;
  color: #fff;
  font-weight: ${props => props.theme.fontWeightBold};

  span {
    display: inline-block;
    text-align: center;
  }
`;

export default () => {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const language = useSelector(selectCurrentLanguage);

  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const startAnimation = useCallback(() => {
    const animationSteps =
      language === "fr"
        ? [
            { text: "a", delay: 600 },
            { text: "az", delay: 700 },
            { text: "aze", delay: 800 },
            { text: "azea", delay: 900 },
            { text: "azeaz", delay: 1000 },
            { text: "azea", delay: 1500 },
            { text: "aze", delay: 1600 },
            { text: "az", delay: 1700 },
            { text: "a", delay: 1800 },
            { text: " ", delay: 1900 },
            { text: "q", delay: 2800 },
            { text: "qw", delay: 3000 },
            { text: "qwe", delay: 3200 },
            { text: "qweq", delay: 3400 },
            { text: "qweqw", delay: 3600 },
            { text: "qweqwe", delay: 3800 },
            { text: "qweqwe.", delay: 4100 },
            { text: "qweqwe.i", delay: 4300 },
            { text: "qweqwe.io", delay: 4400 },
          ]
        : [
            { text: "q", delay: 600 },
            { text: "qw", delay: 700 },
            { text: "qwe", delay: 800 },
            { text: "qweq", delay: 1000 },
            { text: "qweqw", delay: 1100 },
            { text: "qweqwe", delay: 1200 },
            { text: "qweqwe.", delay: 1500 },
            { text: "qweqwe.i", delay: 1700 },
            { text: "qweqwe.io", delay: 1900 },
          ];

    ref.current.map(clearTimeout);
    ref.current = [];
    set([{ key: " ", value: " " }]);

    animationSteps.forEach(step => {
      const chars = step.text.split("");
      const charArrayAggr = chars.map((c, i) => ({ key: c + i, value: c }));

      ref.current.push(setTimeout(() => set(charArrayAggr), step.delay));
    });
  }, []);

  useEffect(() => {
    startAnimation();

    return () => {
      ref.current.map(clearTimeout);
    };
  }, []);

  return (
    <Logo to={`/${language}`}>
      {transitions.map(({ item, props, key }) => (
        <animated.span className="transitions-item" key={key} style={props}>
          {item.value}
        </animated.span>
      ))}
    </Logo>
  );
};
