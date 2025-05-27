import { Link } from 'react-router-dom';
import { CITIES } from '../../components/Header/components/HeaderTop/components/CityPopup/CityPopup';
import { Input } from '../../UI/Input';
import { contactsBeloreck, contactsMagnitogorsk, REQUISITES } from './const';
import styles from './ContactPage.module.scss';
import { useState } from 'react';
import { ContactsMap } from './components/ContactsMap';

export const ContactsPage = () => {
  const [selectedCity, setSelectedCity] = useState<string>(CITIES[0].value);

  const getContactsForCity = (city: string) => {
    switch (city) {
      case 'Белорецк':
        return contactsBeloreck;
      default:
        return contactsMagnitogorsk;
    }
  };

  const currentContacts = getContactsForCity(selectedCity);
  return (
    <div className={styles.container}>
      <div className={styles.contacts}>
        <div className={styles.contactsContent}>
          <Input
            label="Город"
            type="select"
            options={CITIES}
            onChange={e => setSelectedCity(e.target.value)}
          />
          {currentContacts.map(contact => (
            <div className={styles.contactWrapper} key={contact.adress}>
              <h3 className={styles.adress}>{contact.adress}</h3>
              <span className={styles.timeWorks}>{contact.timeWorks}</span>
              <Link
                to={`tel:${contact.phoneNumber}`}
                aria-label={`Позвонить:${contact.phoneNumber}`}
                className={styles.phoneNumber}
              >
                {contact.phoneNumber}
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.contactsMap}>
          <ContactsMap contacts={currentContacts} />
        </div>
      </div>
      <div className={styles.requisites}>
        <h2 className={styles.title}>Реквизиты</h2>
        <div className={styles.detailsWrapper}>
          {REQUISITES.map(item => (
            <div key={item.label} className={styles.detailItem}>
              <span className={styles.detailLabel}>{item.label}</span>
              <span className={styles.detailValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
