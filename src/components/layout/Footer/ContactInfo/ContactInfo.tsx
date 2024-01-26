import styles from '../footer.module.scss';

const ContactInfo = () => {
  return (
    <div>
      <div>
        <span>Infolinia jest czynna:</span>
        <span>pon-pt: 8:00-17:00</span>
        <span>sob: 9:00 - 14:00</span>
      </div>

      <div>
        <div>
          <img src="/assets/footer/phoneIcon.svg" alt="" />
          <span>310-437-2766</span>
        </div>
        <div>
          <img src="/assets/footer/mapIcon.svg" alt="" />
          <span>706 Campfre Ave. Meriden, CT 06450</span>
        </div>
        <div>
          <img src="/assets/footer/mailIcon.svg" alt="" />
          <span>unreal@outlook.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
