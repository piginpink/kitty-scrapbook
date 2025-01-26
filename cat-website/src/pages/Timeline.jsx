
  const Timeline = ({ timelineData }) => {
    return (
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-image">
                <img src={item.img} alt={`event-${index}`} />
              </div>
              <div className="timeline-text-content">
                <p className="timeline-date">{item.date}</p>
                <p className="timeline-text">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Timeline;