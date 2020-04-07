import React from 'react';
import { storiesOf } from '@storybook/react';
import { css } from '../Create_Coin_WebSite/withStyles';
import Spacing from '../Create_Coin_WebSite/Spacing';
import Card from '../Create_Coin_WebSite/Card';
import Text from '../Create_Coin_WebSite/Text';
import LineList from '../Create_Coin_WebSite/InlineList';

function RedBox({ children }) {
  return (
    <div
      {...css({
        border: '1px red solid',
        minHeight: 100,
      })}
    >
      {children}
    </div>
  );
}
storiesOf('Spacing', module)
  .addWithJSX('기본설정', () => (
    <RedBox>
      <Spacing top={1}>
        <RedBox>top:1</RedBox>
      </Spacing>
      <Spacing bottom={2}>
        <RedBox>bottom: 2</RedBox>
      </Spacing>
      <Spacing left={3}>
        <RedBox>left:3</RedBox>
      </Spacing>
      <Spacing right={4}>
        <RedBox>right:4</RedBox>
      </Spacing>
      <Spacing horizontal={5}>
        <RedBox>horizontal:5</RedBox>
      </Spacing>
      <Spacing vertical={6}>
        <RedBox>vertical:6</RedBox>
      </Spacing>
    </RedBox>
  ))
  .addWithJSX('card', () => (
    <RedBox>
      <Card vertical={10}>
        <LineList align="center">
          <Text xlarge primaryDark>
            CardComponent
          </Text>
        </LineList>
      </Card>
    </RedBox>
  ));
