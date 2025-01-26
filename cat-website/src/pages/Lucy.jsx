import Timeline from './Timeline.jsx'

const timelineData = [
    { date: '2024 October', text: 'Infancy: Born in the freezing temperatures of a New York warehouse, Lucy did not have the luxury of being carefree. My mom\'s animal enthusiast co-worker drove up to the Big Apple in December when they first heard about Lucy as my mom offered to take her in.', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/pre-babylucy.jpeg?raw=true' },
    { date: '2024 December 21', text: '2 months: First day home... she would only hide in the couch', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/12:21:24%20lucy.jpeg?raw=true' },
    { date: '2025 January 10', text: '3 months', img: 'https://github.com/piginpink/CatMeetsNipPureHTML/blob/main/1:10:25%20lucy.jpeg?raw=true' },

  ];

export default function Lucy() {
    return <> 
    <div className="Lucy">
        <h1 className="title"><br/>Lucy</h1>
    </div>

    <div>
    <Timeline timelineData={timelineData}/>
    </div>
    </>
}