import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from '../public/timelineElements';
import WorkIcon from '../public/icons/work.svg';
import SchoolIcon from '../public/icons/school.svg';
import styles from '../styles/Timeline.module.scss';

// TODO (v2): import work & school svg icons as components;
const Timeline = () => {
  let workIconStyle: object = { background: '#70587c' };
  let schoolIconStyle: object = { background: '#171738' };
  let cardStyle: object = { background: '#c8b8db', color: '#fff' };
  let arrowStyle: object = { borderRight: '1vmin solid #c8b8db' };

  return (
    <div>
      <VerticalTimeline>
        {timelineElements.map((el, i) => {
          return (
            <VerticalTimelineElement
              key={i}
              contentStyle={cardStyle}
              contentArrowStyle={arrowStyle}
              date={el.date}
              dateClassName={styles.date}
              iconStyle={el.icon === 'work' ? workIconStyle : schoolIconStyle}
              // icon={el.icon === 'work' ? <WorkIcon /> : <SchoolIcon />}
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
