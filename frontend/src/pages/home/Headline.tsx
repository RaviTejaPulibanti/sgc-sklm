import Marquee from "./MarqueeTextComponenet";

const Headline = () => {
    return (
     
      
        <Marquee 
        text="Limited Time Offer: Get 50% off on all courses this week! Use code LEARN50"
        direction="right"
        speed={40}
        mobileSpeed={20}
        pauseOnHover
        repeat={4}
        style={{
          backgroundColor: '#ffeb3b',
          padding: '10px 0',
          marginTop: '30px',
          fontWeight: 'bold',
          fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' // Responsive font size
        }}
      />
   
    );
}
export default Headline;