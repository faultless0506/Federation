import './Federation.scss';
import Sportsmans from '../../components/SportsmansAndTrainers/Sportsmans';
import FederationLead from '../../components/FedLead/FedLead';
import Trainers from '../../components/SportsmansAndTrainers/Trainers';
import ClubsAndPartners from '../../components/ClubsAndPartners/ClubsAndPartners';
import FedLocation from '../../components/FedLocation/FedLocation';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import DocumentSection from '../../components/DocumentsSection/DocumentsSections';
import { handleDownloadDocument, handleOpenDocument } from '../../customHooks/handleDocumentEvents';
export default function Federation() {
  const documents = useSelector((state: RootState) => state.documents.items);
  const documentsFederaion = documents.filter((doc) => doc.doctype === 1);
  const documentsSportsmans = documents.filter((doc) => doc.doctype === 2);
  const documentsExamples = documents.filter((doc) => doc.doctype === 3);
  const documentsProvisions = documents.filter((doc) => doc.doctype === 4);
  const documentsOther = documents.filter((doc) => doc.doctype === 5);


  return (
    <div className="container content federation">
      <FedLocation />

      <Sportsmans />
      <Trainers />
      <section className="federation__membership textarea">
        <h2>Членство в Федерации</h2>

        <>
          <h3>Общие положения</h3>
          <p>
            В целях исполнения решения Президента Федерации самбо Москвы по
            разъяснению порядка уплаты членских взносов в Региональной
            общественной организации «Федерация самбо Москвы», а также в связи с
            утверждением Президиума Федерации самбо Москвы «25» декабря 2018
            года новой редакции Положения «О членских взносах в Региональной
            общественной организации «Федерация самбо Москвы» (далее —
            Положение) членам Федерации самбо Москвы: физическим лицам и
            юридическим лицам: общественным организациям, спортивным клубам, при
            уплате членских взносов руководствоваться следующим регламентом:
          </p>
        </>

        <>
          <h3>Источники формирования имущества</h3>
          <p>
            Членские взносы, так же как и иные имущественные взносы и
            пожертвования являются источниками формирования имущества Федерации
            самбо Москвы в соответствии со{' '}
            <strong>
              ст. 26 Федерального закона «О некоммерческих организациях» от
              12.01.1996 N 7-ФЗ
            </strong>
            .
          </p>
          <p>
            Члены ФСМ обязаны участвовать в формировании имущества Федерации в
            размере, порядке и способом, которые предусмотрены{' '}
            <strong>п. 4.15. Устава Федерации самбо Москвы</strong> и Положением
            «О членских взносах» в соответствии с{' '}
            <strong>
              п.4 ст.65.2 Гражданского кодекса Российской Федерации
            </strong>
            .
          </p>
        </>

        <>
          <h3>Виды членских взносов</h3>
          <p>В Федерации устанавливаются следующие виды членских взносов:</p>
          <ul>
            <li>
              ежегодный членский взнос для физических лиц — в размере 200 000
              рублей (впервые уплаченный ежегодный членский взнос признается
              вступительным членским взносом)
            </li>
            <li>
              ежегодный членский взнос для юридических лиц — общественных
              объединений, спортивных клубов — в размере 100 000 рублей
            </li>
            <li>
              ежегодный членский взнос для общественных объединений — в размере
              в соответствии с положениями Федерального закона «О некоммерческих
              организациях» от 12.01.1996 N 7-ФЗ
            </li>
            <li>
              ежегодный членский взнос для спортивных клубов — в размере в
              соответствии с положениями Федерального закона «О некоммерческих
              организациях» от 12.01.1996 N 7-ФЗ
            </li>
          </ul>

          <p>
            Неуплата членского взноса в установленный период, влечет за собой
            исключение из членов Федерации самбо Москвы, в порядке установленном{' '}
            <strong>п. 4. Устава Федерации самбо Москвы</strong>.
          </p>
        </>

        <>
          <h3>Размер членского взноса</h3>
          <p>
            Членский взнос с 01 января 2019 года установлен в размере согласно{' '}
            <strong>
              Приложению № 1 к Положению о членских взносах в РОО «Федерация
              самбо Москвы»
            </strong>
            .
          </p>
        </>

        <>
          <h3>Порядок уплаты</h3>
          <p>
            Физические и юридические лица — члены Федерации уплачивают членский
            взнос единовременным платежом путем безналичного перечисления
            денежных средств на расчетный счет Федерации самбо Москвы.
          </p>
        </>
      </section>
      <ClubsAndPartners />
      <FederationLead />
      <section className="documents">
        <h2 className="section-header">Список документов</h2>

        <DocumentSection
          title="Уставные документы Федерации"
          documents={documentsFederaion}
          onOpenDocument={handleOpenDocument}
          onDownloadDocument={handleDownloadDocument}
        />

        <DocumentSection
          title="Документы для спортсменов"
          documents={documentsSportsmans}
          onOpenDocument={handleOpenDocument}
          onDownloadDocument={handleDownloadDocument}
        />

        <DocumentSection
          title="Шаблоны"
          documents={documentsExamples}
          onOpenDocument={handleOpenDocument}
          onDownloadDocument={handleDownloadDocument}
        />

        <DocumentSection
          title="Положения и регламенты"
          documents={documentsProvisions}
          onOpenDocument={handleOpenDocument}
          onDownloadDocument={handleDownloadDocument}
        />

        <DocumentSection
          title="Другое"
          documents={documentsOther}
          onOpenDocument={handleOpenDocument}
          onDownloadDocument={handleDownloadDocument}
        />
      </section>
    </div>
  );
}
