import React from 'react'

function FormatPrice({price}) {

    const pakistanFormatter = new Intl.NumberFormat('en-PK', {
        style: 'currency',
        currency: 'PKR',
        maximumSignificantDigits: 2
      });
  return   pakistanFormatter.format(price/100);
}

export default FormatPrice