
import NewsSlider from '../../components/Sliders/NewsSlider';
import CompetitionsSlider from '../../components/Sliders/CompetitionsSlider';
import ClubsAndPartners from '../../components/ClubsAndPartners/ClubsAndPartners';
import { MainLanding } from '../../components/Landing/MainLanding';
import Lessons from '../../components/Lessons/Lessons';
import Trainers from '../../components/PeopleLists/Trainers';
import NavMenu from '../../components/NavMenu/NavMenu';
import FedLocation from '../../components/FedLocation/FedLocation';
const Main = () => {
  
  return (
    <>
      <NavMenu
        items={[
          { id: 'location', label: 'Как добраться' },
          { id: 'lessons', label: 'Занятия' },
          { id: 'news', label: 'Новости и соревнования' },
          { id: 'details', label: 'Устав' },
          { id: 'clubs-and-partners', label: 'Партнерские организации' },
        ]}
      />
      <MainLanding />
      <div className="container content main">
          <NewsSlider
          />
          <CompetitionsSlider
          />
       
        <FedLocation />
        <Lessons />
        <Trainers />

        {/* <FedDetails /> */}
        <ClubsAndPartners />
      </div>
    </>
  );
};

export default Main;
