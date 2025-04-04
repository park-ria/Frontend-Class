import React, { useEffect, useState, useContext, useRef } from "react";
import { StateContext } from "../../App";
import styled from "styled-components";
import StoryItem from "./StoryItem";
import { auth } from "../../utils/firebase";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 680px;
  height: 140px;
  margin: 0 auto;
  padding: 8px 0;
  display: ${({ $noneFollowing }) => ($noneFollowing ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 770px) {
    width: 430px;
  }

  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;

const StorySection = styled.div`
  flex: 1;
  overflow: hidden;
`;

const StoryGroup = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StoryContent = () => {
  const [visible, setVisible] = useState(0);
  const [storyDesc, setStoryDesc] = useState([]);
  const { myProfile } = useContext(StateContext);
  const { allProfile } = useContext(StateContext);
  const ref = useRef(null);

  useEffect(() => {
    if (!myProfile || !auth?.currentUser || !allProfile) return;

    if (myProfile.following.length > 0) {
      const storyDesc = allProfile
        .filter((profile) => myProfile.following.includes(profile.uid))
        .map((info) => {
          return {
            userId: info.userId,
            imgPath: info.profilePhoto,
            active: true,
          };
        });
      setStoryDesc(storyDesc);
    }
  }, [myProfile]);

  const itemWidth = 80;
  const itemGap = 20;

  useEffect(() => {
    if (ref.current) {
      const parentWidth = ref.current.clientWidth;
      const maxVisibleItems = Math.floor(parentWidth / (itemWidth + itemGap));
      const totalItems = storyDesc.length;

      setVisible(Math.max(0, Math.min(visible, totalItems - maxVisibleItems)));
    }
  }, [storyDesc]);

  const handleDragEnd = (event, info) => {
    const parentWidth = ref.current.clientWidth;
    const maxVisibleItems = Math.floor(parentWidth / (itemWidth + itemGap));
    const distanceMoved = info.offset.x / (itemWidth + itemGap);

    setVisible((prev) => {
      const newVisible = Math.round(prev - distanceMoved);
      return Math.max(
        0,
        Math.min(newVisible, storyDesc.length - maxVisibleItems)
      );
    });
  };

  return (
    <Wrapper $noneFollowing={!myProfile?.following.length}>
      <StorySection ref={ref}>
        <StoryGroup
          drag="x"
          dragConstraints={{
            left: -(
              (storyDesc.length -
                Math.floor(ref.current?.clientWidth / (itemWidth + itemGap))) *
              (itemWidth + itemGap)
            ),
            right: 0,
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -visible * (itemWidth + itemGap) }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {storyDesc.map((it, idx) => (
            <StoryItem
              key={idx}
              userId={it.userId}
              imgPath={it.imgPath}
              type={it.active > 0 ? "active" : "inactive"}
            />
          ))}
        </StoryGroup>
      </StorySection>
    </Wrapper>
  );
};

export default StoryContent;
