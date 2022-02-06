export default function reviewConverter(reviewAverage)
{
    let reviewTotal = "";
    if(reviewAverage < 1)
    {
      reviewTotal = <><i className="fas fa-star-half-alt"></i></>;
    }
    else if (reviewAverage == 1)
    {
      reviewTotal = <><i className="fas fa-star"></i></>;
    }
    else if (reviewAverage > 1 && reviewAverage < 2)
    {
      reviewTotal = <><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></>;
    }
    else if (reviewAverage == 2)
    {
      reviewTotal = <><i className="fas fa-star"></i><i className="fas fa-star"></i></>;
    }
    else if (reviewAverage > 2 && reviewAverage < 3)
    {
      reviewTotal = <><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></>;
    }
    else if (reviewAverage == 3)
    {
      reviewTotal = <><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></>
    }
    else if (reviewAverage > 3 && reviewAverage < 4)
    {
      reviewTotal = <><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></>;
    }
    else if (reviewAverage == 4)
    {
      reviewTotal = <><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></>;
    }
    else if (reviewAverage > 4 && reviewAverage < 5)
    {
      reviewTotal = <><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></>;
    }
    else if (reviewAverage == 5)
    {
      reviewTotal = <><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></>;
    }
    // reviewTotal = <span className='flex flex-row'>{reviewTotal}</span>;
    return reviewTotal;
}