import { PhotoProvider, PhotoView } from 'react-photo-view'
import { Grid } from '@mui/material'
import 'react-photo-view/dist/react-photo-view.css'
import img1 from '../../assets/iloveimg-compressed/mitw2023_1.jpg'
import img2 from '../../assets/iloveimg-compressed/mitw2023_2.jpg'
import img3 from '../../assets/iloveimg-compressed/mitw2023_3.jpg'
import img4 from '../../assets/iloveimg-compressed/mitw2023_4.jpg'
import img5 from '../../assets/iloveimg-compressed/mitw2023_5.jpg'
import img6 from '../../assets/iloveimg-compressed/mitw2023_6.jpg'
import img7 from '../../assets/iloveimg-compressed/mitw2023_7.jpg'
import img8 from '../../assets/iloveimg-compressed/mitw2023_8.jpg'
import img9 from '../../assets/iloveimg-compressed/mitw2023_9.jpg'
import img10 from '../../assets/iloveimg-compressed/mitw2023_10.jpg'
import img11 from '../../assets/iloveimg-compressed/mitw2023_11.jpg'
import img12 from '../../assets/iloveimg-compressed/mitw2023_12.jpg'
import img13 from '../../assets/iloveimg-compressed/mitw2023_13.jpg'
import img14 from '../../assets/iloveimg-compressed/mitw2023_14.jpg'
import img15 from '../../assets/iloveimg-compressed/mitw2023_15.jpg'
import img16 from '../../assets/iloveimg-compressed/mitw2023_16.jpg'
import img17 from '../../assets/iloveimg-compressed/mitw2023_17.jpg'
import img18 from '../../assets/iloveimg-compressed/mitw2023_18.jpg'
import img19 from '../../assets/iloveimg-compressed/mitw2023_19.jpg'
import img20 from '../../assets/iloveimg-compressed/mitw2023_20.jpg'
import img21 from '../../assets/iloveimg-compressed/mitw2023_21.jpg'
import img22 from '../../assets/iloveimg-compressed/mitw2023_22.jpg'

const ActivitySilhouette = () => {
  const images_array = [
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
  ]

  return (
    <div style={{ background: '#f3f4f6' }}>
      <PhotoProvider>
        <div className="foo">
          <Grid container spacing={2} style={{ padding: '1rem' }}>
            <Grid item xs={12}>
              <PhotoView key={'img1'} src={img1}>
                <img src={img1} alt="" style={{ width: '100%', cursor: 'pointer' }} />
              </PhotoView>
            </Grid>
            {images_array.map((item, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <PhotoView key={index} src={item}>
                  <img src={item} alt="" style={{ width: '100%', cursor: 'pointer' }} />
                </PhotoView>
              </Grid>
            ))}
          </Grid>
        </div>
      </PhotoProvider>
    </div>
  )
}

export default ActivitySilhouette
