import React, { useEffect, useState } from "react";
import styled from "styled-components";
import app from "../base";
import { AiOutlineSearch } from "react-icons/ai";
import { RiAddFill } from "react-icons/ri";
import moment from "moment";

const Home = () => {
  const [data, setData] = useState([]);

  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const [childrenData, setChildrenData] = useState([]);

  const [clickMen, setClickMen] = useState(false);
  const [clickWomen, setClickWomen] = useState(false);
  const [clickChildren, setClickChildren] = useState(false);
  const [click, setClick] = useState(false);

  const handleMen = () => {
    setClick(false);
    setClickChildren(false);
    setClickMen(true);
    setClickWomen(false);
  };
  const handleWomen = () => {
    setClickChildren(false);
    setClickMen(false);
    setClickWomen(true);
    setClick(false);
  };
  const handleChildren = () => {
    setClickChildren(true);
    setClickMen(false);
    setClickWomen(false);
    setClick(false);
  };
  const handle = () => {
    setClickChildren(false);
    setClickMen(false);
    setClickWomen(false);
    setClick(true);
  };

  const getData = async () => {
    await app
      .firestore()
      .collection("shopping")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setData(item);
        console.log(data);
      });
  };
  const getMenData = async () => {
    await app
      .firestore()
      .collection("shopping")
      .orderBy("men")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setMenData(item);
        console.log(menData);
      });
  };
  const getWomenData = async () => {
    await app
      .firestore()
      .collection("shopping")
      .orderBy("women")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setWomenData(item);
        console.log(womenData);
      });
  };
  const getChildrenData = async () => {
    await app
      .firestore()
      .collection("shopping")
      .orderBy("children")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setChildrenData(item);
        console.log("child", childrenData);
      });
  };

  useEffect(() => {
    getData();
    console.log("my", data);
    getMenData();
    getWomenData();
    getChildrenData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <TextHolder>
          <Text>
            Welcome to our shopping app, you get the best shopping experience
            here, because we offer only the best.
          </Text>
        </TextHolder>
        <SearchHolder>
          <SearchHere>
            <div style={{ fontSize: "20px" }}>
              <AiOutlineSearch />
            </div>

            <div onClick={handle}>Popular</div>
            <div onClick={handleMen}>Men</div>
            <div onClick={handleWomen}>Women</div>
            <div onClick={handleChildren}>Children</div>
          </SearchHere>
          <UploadHere>
            <div>Upload Product</div>
            <div>
              <RiAddFill style={{ fontSize: "20px" }} />
            </div>
          </UploadHere>
        </SearchHolder>
        <CardHolder>
          {clickMen ? (
            <>
              {menData?.map(({ id, title, avatar, logo, time }) => (
                <Card key={id}>
                  <Logo src={logo} />
                  <CardMain>
                    <CardText>{title}</CardText>
                    <Time>10 minutes ago</Time>
                    <CardImage src={avatar} />
                    <CardIcons></CardIcons>
                  </CardMain>
                </Card>
              ))}
            </>
          ) : clickWomen ? (
            <>
              {womenData?.map(({ id, title, avatar, logo, time }) => (
                <Card key={id}>
                  <Logo src={logo} />
                  <CardMain>
                    <CardText>{title}</CardText>
                    <Time>10 minutes ago</Time>
                    <CardImage src={avatar} />
                    <CardIcons></CardIcons>
                  </CardMain>
                </Card>
              ))}
            </>
          ) : clickChildren ? (
            <>
              {childrenData?.map(({ id, title, time, logo, avatar }) => (
                <Card key={id}>
                  <Logo src={logo} />
                  <CardMain>
                    <CardText>{title}</CardText>
                    <Time>10 minutes ago</Time>
                    <CardImage src={avatar} />
                    <CardIcons></CardIcons>
                  </CardMain>
                </Card>
              ))}
            </>
          ) : click ? (
            <>
              {data?.map(({ id, time, title, avatar, logo }) => (
                <Card>
                  <Logo src={logo} />
                  <CardMain>
                    <CardText>{title}</CardText>
                    <Time>{moment(time).fromNow}</Time>
                    <CardImage src={avatar} />
                    <CardIcons></CardIcons>
                  </CardMain>
                </Card>
              ))}
            </>
          ) : (
            <>
              {data?.map(({ id, title, time, avatar, logo }) => (
                <Card key={id}>
                  <Logo />
                  <CardMain>
                    <CardText>{title}</CardText>
                    <Time>{moment(time).fromNow()}</Time>
                    <CardImage />
                    <CardIcons></CardIcons>
                  </CardMain>
                </Card>
              ))}
            </>
          )}
        </CardHolder>
      </Wrapper>
    </Container>
  );
};

export default Home;

const CardHolder = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: 1px solid white;
  margin: 20px;
`;

const Card = styled.div`
  height: 350px;
  width: 280px;
  border-radius: 10px;
  border: 1px solid gray;
  background-color: #1c1d1f;
  box-shadow: rgba(0 0 0 /69%) -10px 20px 10px -10px;
  margin: 20px;
  :hover {
    border: 1px solid white;
  }
`;
const CardMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const CardText = styled.div`
  text-align: left;
  width: 80%;
  height: 70px;
  font-weight: bold;
`;
const CardImage = styled.img`
  border-radius: 10px;
  height: 150px;
  width: 90%;
  object-fit: cover;
`;

const Time = styled.div`
  font-style: italic;
  font-size: 14px;
  color: gray;
  /* width: 100%;
  justify-content: flex-start; */
`;
const CardIcons = styled.div``;

const SearchHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  font-weight: bold;
`;
const SearchHere = styled.div`
  display: flex;
  margin-left: 20px;

  div {
    margin-left: 20px;
    :hover {
      color: gray;
      cursor: pointer;
    }
  }
`;
const UploadHere = styled.div`
  display: flex;
  margin-right: 20px;
  div {
    margin-right: 10px;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: white;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;
const TextHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
`;
const Text = styled.div`
  display: flex;
  width: 300px;
  height: 100px;
  border-radius: 10px;
  border: 1px solid white;
  text-align: center;
  align-items: center;
`;
