import { useBrandsData, copiedImagePathHandler } from '../../../context/FetchDataContext';
import styles from './Brands.module.scss';

const BrandsContainer = () => {
    const brandsData = useBrandsData();
    const modifiedBrandsData = brandsData.map(item => {
        return {
            image: copiedImagePathHandler(item.image),
        };
    });
    const brandsImages = modifiedBrandsData.map((brand, index) => (
        <img key={index} src={brand.image} alt={`brand-${index}-img`}></img>
    ));

    return (
        <section className={styles.brandsSection}>
            <div className={styles.mainWrap}>
                <div className={styles.brandsContainer}>
                    <h4 className={styles.brandsTitle}>Featured Brands:</h4>
                    <div className={styles.brandsImages}>
                        {brandsImages}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default BrandsContainer;
