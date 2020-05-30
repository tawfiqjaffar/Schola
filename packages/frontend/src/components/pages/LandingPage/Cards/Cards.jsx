import {
  AssessmentTwoTone,
  ForumTwoTone,
  ImportContactsTwoTone,
} from '@material-ui/icons';
import React from 'react';
import uuid from 'react-uuid';
import CardItem from './CardItem';

const data = [
  {
    title: 'Manage your school progress',
    description:
      "Discover a new working method to boost your productivity whether you're a student or a teacher",
    icon: ImportContactsTwoTone,
  },
  {
    title: 'Learn more efficiently',
    description:
      'We garanty at least +2 points on your year average if you choose our solution for your studies',
    icon: AssessmentTwoTone,
  },
  {
    title: 'Exchange with teachers',
    description:
      'Get help from those you need at the right moment. Chat with your teachers efficiently',
    icon: ForumTwoTone,
  },
];

const Cards = () => (
  <>
    {data.map((el) => (
      <CardItem
        key={uuid()}
        icon={el.icon}
        title={el.title}
        description={el.description}
      />
    ))}
  </>
);

export default Cards;
