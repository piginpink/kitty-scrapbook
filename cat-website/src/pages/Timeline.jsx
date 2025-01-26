const timelineData = [
    { date: '2020 October', text: 'Infancy: He\'s the black and white one at the top! Toby\'s mother was pregnant and rescued from the streets of Philadelphia. After she gave birth, the mother and her litter were fostered by @theblackthornberry through PhillyPAWS.', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/pre-babytoby.jpeg?raw=true' },
    { date: '2020 December 31', text: '2 months: First day home :)', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/12_31_20%20toby.jpeg?raw=true' },
    { date: '2021 January 12', text: '3 months', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/1:12:21%20toby.jpeg?raw=true' },
    { date: '2021 February 11', text: '4 months', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/2:11:21%20toby.jpeg?raw=true' },
    { date: '2021 March 11', text: '5 months', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/3:11:21%20toby.jpeg?raw=true' },
    { date: '2021 April 29', text: '6 months', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/4:29:21%20toby.jpeg?raw=true' },
    { date: '2021 May 29', text: '7 months', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/5:29:21.jpeg?raw=true' },
    { date: '2021 June 25', text: '8 months', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/6:25:21.jpeg?raw=true' },
    { date: '2021 July 26', text: '9 months', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/7:26:21.jpeg?raw=true' },
    { date: '2021 August 21', text: '10 months', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/8:21:21.jpeg?raw=true' },
    { date: '2021 September 5', text: '11 months', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/9:5:21.jpeg?raw=true' },
    { date: '2021 October 15', text: '1 year', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/10:15:21.jpeg?raw=true' },
    { date: '2022 October 9', text: '2 years', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/10:9:22.jpeg?raw=true' },
    { date: '2023 May 10', text: '3 years', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/5:10:23.jpeg?raw=true' },
    { date: '2024 October 1', text: '4 years', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/10:1:24.jpeg?raw=true' },
  ];
  
  const Timeline = () => {
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