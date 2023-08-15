import useCheckImagePath from '../../../custom_hooks/CheckImagePath';
import GreenButton from '../buttons/GreenButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './AdsCard.module.scss';

const AdsCard = () => {
    const bgImageUrl = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/organic-food-card-img.jpg`, './static/media/organic-food-card-img.jpg');
    const bgImageStyle = {
        backgroundImage: `url(${bgImageUrl})`,
      };

    return (
        <div className={styles.adsCard} style={bgImageStyle}>
            <div className={styles.adsOverlay}></div>
            <div className={styles.adsContent}>
                <div className={styles.contentHolder}>
                    <p className={styles.importantText}>
                        Deal Of The Day 15% Off On All Vegetables!</p>
                    <p className={styles.text}>I am text block. Click edit button to change this tex em ips.</p>
                </div>
                <GreenButton class={true}>
                    Show Now
                    <FontAwesomeIcon icon={faArrowRight} />
                </GreenButton>
            </div>
        </div>

    )
};

export default AdsCard;