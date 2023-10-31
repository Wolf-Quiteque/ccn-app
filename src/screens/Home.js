import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { gStyle } from '../constants';

// components
import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';
import PromotionBanner from '../components/PromotionBanner';
import ShowScroller from '../components/ShowScroller';

function Home() {
  // on active tab press, scroll to top
  const ref = React.useRef(null);
  useScrollToTop(ref);

  // local state
  const [showHeader, setShowHeader] = React.useState(true);
  const [offset, setOffset] = React.useState(0);

  const onScroll = (event) => {
    let show = showHeader;
    const currentOffset = event.nativeEvent.contentOffset.y;
    show = currentOffset < offset;

    if (show !== showHeader || offset <= 0) {
      // account for negative value with "bounce" offset
      if (offset <= 0) show = true;

      setShowHeader(show);
    }

    setOffset(currentOffset);
  };

  return (
    <View style={gStyle.container}>
      <HeaderHome show={showHeader} />

      <ScrollView
        ref={ref}
        bounces
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <PromotionBanner />

        <Text style={gStyle.heading}>Live Shows</Text>
        <ShowScroller dataset="previews" type="round" />

        <Text style={gStyle.heading}>CCN ORIGINALS</Text>
        <ShowScroller dataset="myList" />

        <Text style={gStyle.heading}>Podcasts</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>Events</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>Interviews</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>Documentaries</Text>
        <ShowScroller />

        <View style={gStyle.spacer3} />
      </ScrollView>

      <Cast />
    </View>
  );
}

export default Home;
