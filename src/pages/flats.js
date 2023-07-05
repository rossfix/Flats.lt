import React, { useState, useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";
import StationarNav from "../components/Navbar/NoNav";
import {
  ImgFlex,
  Img,
  CustomPreviewGroup,
  ImgElements,
  PreviewGroup,
  ImgLast,
  ImgMob,
  TextGroup,
  Features,
  FeaturesPar,
  Button,
  AboutFlat,
  AboutFlatSub,
  FeaturesCol,
  FeaturesName,
  Price,
  Desc,
  Contact,
  MapGroup,
} from "../components/ListingElements";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaFacebookMessenger, FaCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import Map from "../components/Map";

const FlatsPage = () => {
  const { flatId } = useParams();
  const [data, setData] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDoc(doc(db, "flats", flatId));

      if (querySnapshot.exists()) {
        const documentData = querySnapshot.data();
        setData(documentData);

        const userSnapshot = await getDocs(
          query(
            collection(db, "user_nonpersonal"),
            where("uid", "==", documentData.uid)
          )
        );

        const userData = [];
        userSnapshot.forEach((doc) => {
          userData.push(doc.data());
        });

        setButtons(userData);

        try {
          const urls = await Promise.all(
            (documentData.img || []).map(async (imageURL) => {
              const storageRef = ref(storage, imageURL);
              return getDownloadURL(storageRef);
            })
          );
          setImageUrls(urls);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      } else {
        console.log("No such document!");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Butas nuomai</title>

          {data.flatName && (
            <meta property="og:title" content={data.flatName} />
          )}
          {data.flatName && (
            <meta
              property="og:description"
              content={data.description.substring(0, 50) + "..."}
            />
          )}
          {data.flatName && <meta property="og:image" content={data.img[0]} />}

          <meta property="og:url" content="https://flats.lt" />
          <meta property="og:type" content="website" />
        </Helmet>
      </HelmetProvider>

      <ScrollToTop />
      <StationarNav />
      <div>
        <AboutFlat>
          <AboutFlatSub>
            <PreviewGroup>
              <ImgFlex>
                <CustomPreviewGroup>
                  {loading ? (
                    <div>Krauna...</div>
                  ) : (
                    <>
                      {imageUrls.map((imageUrl, index) => (
                        <ImgElements key={index}>
                          {index === 0 ? (
                            <Img className="ImgLarge" src={imageUrl} />
                          ) : index <= 3 ? (
                            <Img className="ImgSmall" src={imageUrl} />
                          ) : index <= 4 ? (
                            <ImgMob>
                              <Img className="ImgSmall" src={imageUrl} />
                            </ImgMob>
                          ) : (
                            <ImgLast>
                              <Img height={100} src={imageUrl} />
                            </ImgLast>
                          )}
                        </ImgElements>
                      ))}
                    </>
                  )}
                </CustomPreviewGroup>
              </ImgFlex>
            </PreviewGroup>
            <TextGroup>
              <h1>{data.flatName}</h1>

              <Desc>{data.description}</Desc>
              <Features>
                <FeaturesCol>
                  <FeaturesName>KAMBARIAI</FeaturesName>
                  <FeaturesPar>{data.rooms}</FeaturesPar>
                </FeaturesCol>
                <FeaturesCol>
                  <FeaturesName>PLOTAS</FeaturesName>
                  <FeaturesPar>{data.square}m²</FeaturesPar>
                </FeaturesCol>
                <FeaturesCol>
                  <FeaturesName>AUKŠTAS</FeaturesName>
                  <FeaturesPar>{data.floor}</FeaturesPar>
                </FeaturesCol>
              </Features>
              <Price>{data.price} €/mėn</Price>
              <Contact>Susisiekti:</Contact>
              {buttons.length > 0 && (
                <>
                  <Button href={buttons[0].messenger} target="_blank">
                    <FaFacebookMessenger />
                  </Button>
                  <Button href={buttons[0].calendar} target="_blank">
                    <FaCalendarAlt />
                  </Button>
                </>
              )}
            </TextGroup>
          </AboutFlatSub>
        </AboutFlat>
        <MapGroup>
          <Map />
        </MapGroup>
      </div>
      <Footer />
    </>
  );
};

export default FlatsPage;
