import React from 'react';
import ReviewImageCarousel from '../organisms/reviewImageCarousel';
import ReviewInformation from '../molecules/reviewInformation';
import { ReviewDetailInfo } from '../../types/review';

interface ReviewDetailTemplateProps {
  data: ReviewDetailInfo,
}

function ReviewDetailTemplate({ data }: ReviewDetailTemplateProps) {
  console.log(data);
  return (
    <main>
      <ReviewImageCarousel reviewImages={data.reviewImages} />
      <ReviewInformation
        rating={data.rating}
        createdAt={data.createdAt}
        reviewerName={data.reviewerName}
        reviewerImage={data.reviewerImage}
        peopleCount={data.peopleCount}
        totalPrice={data.totalPrice}
      />
      <section>
        {data.content}
      </section>
    </main>
  );
}

export default ReviewDetailTemplate;
