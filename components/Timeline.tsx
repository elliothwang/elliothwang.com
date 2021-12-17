import { FC } from 'react';
import { useThemeContext } from './ThemeContext';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelines from '../public/elements/timelines';
import styles from '../styles/Timeline.module.scss';

type Props = {
  title: string;
  location: string;
  date: string;
  description: Array<string>;
  icon: string;
};

const workIconStyle: object = { background: '#70587c' };
const schoolIconStyle: object = { background: '#171738' };
const cardStyleDark: object = { background: '#c8b8db', color: '#fff' };
const cardStyleLight: object = { background: '#f9f4f5', color: '#fff' };
const arrowStyleDark: object = { borderRight: '1vmin solid #c8b8db' };
const arrowStyleLight: object = { borderRight: '1vmin solid #f9f4f5' };

const Timeline: FC = () => {
  const { darkMode } = useThemeContext();

  return (
    <div>
      <VerticalTimeline>
        {timelines.map((el, i) => {
          return (
            <VerticalTimelineElement
              key={i}
              contentStyle={darkMode ? cardStyleDark : cardStyleLight}
              contentArrowStyle={darkMode ? arrowStyleDark : arrowStyleLight}
              date={el.date}
              dateClassName={styles.date}
              iconStyle={el.icon === 'work' ? workIconStyle : schoolIconStyle}
              icon={
                el.icon === 'work' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2vmin"
                    height="2vmin"
                    fill="currentColor"
                    className="bi bi-briefcase"
                    viewBox="0 0 16 16"
                    color="#f9f4f5"
                  >
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2vmin"
                    height="2vmin"
                    fill="currentColor"
                    className="bi bi-mortarboard"
                    viewBox="0 0 16 16"
                    color="#f9f4f5"
                  >
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                  </svg>
                )
              }
              position={i % 2 === 0 ? 'right' : 'left'}
            >
              <h3 className={styles.title}>{el.title}</h3>
              <h4 className={styles.location}>{el.location}</h4>
              {el.icon === 'work' ? (
                <ul className={styles.ul}>
                  {el.description.map((el, i) => {
                    return (
                      <li key={i} className={styles.li}>
                        {el}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className={styles.description}>{el.description}</p>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
