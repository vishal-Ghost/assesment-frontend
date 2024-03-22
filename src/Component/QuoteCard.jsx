import React from 'react';
import { Card, CardContent, Typography, Link, Chip } from '@mui/material';

const QuoteCard = ({ quote, backgroundColor, textColor }) => {
  if (!quote || !quote.originator) {
    return null; // or handle the case when quote or quote.originator is undefined
  }

  const { originator, content, tags } = quote;

  return (
    <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
      <Card variant="outlined" style={{ marginBottom: '20px', backgroundColor }}>
        <CardContent>
          <Typography variant="h5" component="h2" style={{ color: textColor }}>
            {content}
          </Typography>
          <Typography color="textSecondary">
            by{' '}
            {originator.url ? (
              <Link href={originator.url} target="_blank" rel="noreferrer">
                {originator.name}
              </Link>
            ) : (
              originator.name
            )}
          </Typography>
          <Typography variant="body2" component="p" style={{ marginTop: '10px', color: textColor }}>
            {originator.description}
          </Typography>
          <Typography variant="body2" component="p" style={{ marginTop: '10px', color: textColor }}>
            Tags: {tags.map((tag, index) => (
              <Chip key={index} label={tag} style={{ marginLeft: '5px' }} />
            ))}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteCard;
