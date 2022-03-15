export default function reviewConverter(reviewAverage)
{
    let reviewTotal = "<>";
    let stars = 0;
    let half_stars = 0;
    if(reviewAverage < 1) half_stars++;
    if (reviewAverage == 1) stars++;
    if (reviewAverage > 1 && reviewAverage < 2) stars++; half_stars++;
    if (reviewAverage == 2) stars = 2;
    if (reviewAverage > 2 && reviewAverage < 3) stars = 2; half_stars = 1;
    if (reviewAverage == 3) stars = 3;
    if (reviewAverage > 3 && reviewAverage < 4) stars = 3; half_stars = 1;
    if (reviewAverage == 4) stars = 4;
    if (reviewAverage > 4 && reviewAverage < 5) stars = 4; half_stars = 1;
    if (reviewAverage == 5) stars = 5;
    for(i=0; i < stars; i++)
    {
      reviewTotal += '<i className="fas fa-star"></i>';
    }
    for(i=0; i < half_stars; i++)
    {
      reviewTotal += '<i className="fas fa-star-half-alt"></i>';
    }
    return reviewTotal+=</>;
}
