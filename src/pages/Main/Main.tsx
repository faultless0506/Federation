import NewsSlider from '../../components/Sliders/NewsSlider';
import CompetitionsSlider from '../../components/Sliders/CompetitionsSlider';
import ClubsAndPartners from '../../components/ClubsAndPartners/ClubsAndPartners';
import { MainLanding } from '../../components/Landing/MainLanding';
import Trainers from '../../components/PeopleLists/Trainers';
import NavMenu from '../../components/NavMenu/NavMenu';
import FedLocation from '../../components/FedLocation/FedLocation';
import FedDetails from '../../components/FedDetails/FedDetails';
import LessonsSchedule from '../../components/LessonsSchedule/LessonsSchedule';
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
        <FedLocation />
        <LessonsSchedule />
        <FedDetails />
        <NewsSlider />
        <CompetitionsSlider />
        <Trainers />
        <ClubsAndPartners />
      </div>
    </>
  );
};

export default Main;
