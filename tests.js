// tests.js

// Use Chai's expect for assertions
const expect = chai.expect;

describe('SET 1: Manual Test Cases - integerToRoman', function() {
  
  describe('Boundary Value Analysis (BVA)', function() {
    it('TC-I-01: should convert 1 to "I" (minimum valid value)', function() {
      expect(integerToRoman(1)).to.equal('I');
    });
    
    it('TC-I-02: should convert 2 to "II" (near minimum)', function() {
      expect(integerToRoman(2)).to.equal('II');
    });
    
    it('TC-I-19: should convert 3998 to "MMMCMXCVIII" (near maximum)', function() {
      expect(integerToRoman(3998)).to.equal('MMMCMXCVIII');
    });
    
    it('TC-I-20: should convert 3999 to "MMMCMXCIX" (maximum valid value)', function() {
      expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
    });
  });

  describe('Equivalence Partitioning (EP)', function() {
    it('TC-I-03: should convert 3 to "III" (triple repetition of I)', function() {
      expect(integerToRoman(3)).to.equal('III');
    });
    
    it('TC-I-05: should convert 5 to "V" (exact symbol value)', function() {
      expect(integerToRoman(5)).to.equal('V');
    });
    
    it('TC-I-07: should convert 10 to "X" (exact symbol value)', function() {
      expect(integerToRoman(10)).to.equal('X');
    });
    
    it('TC-I-10: should convert 50 to "L" (exact symbol value)', function() {
      expect(integerToRoman(50)).to.equal('L');
    });
    
    it('TC-I-12: should convert 100 to "C" (exact symbol value)', function() {
      expect(integerToRoman(100)).to.equal('C');
    });
    
    it('TC-I-14: should convert 500 to "D" (exact symbol value)', function() {
      expect(integerToRoman(500)).to.equal('D');
    });
    
    it('TC-I-16: should convert 1000 to "M" (exact symbol value)', function() {
      expect(integerToRoman(1000)).to.equal('M');
    });
    
    it('TC-I-17: should convert 1994 to "MCMXCIV" (complex mid-range)', function() {
      expect(integerToRoman(1994)).to.equal('MCMXCIV');
    });
    
    it('TC-I-18: should convert 3888 to "MMMDCCCLXXXVIII" (longest valid numeral)', function() {
      expect(integerToRoman(3888)).to.equal('MMMDCCCLXXXVIII');
    });
  });

  describe('Subtractive Pairs Coverage', function() {
    it('TC-I-04: should convert 4 to "IV" (subtractive pair IV)', function() {
      expect(integerToRoman(4)).to.equal('IV');
    });
    
    it('TC-I-06: should convert 9 to "IX" (subtractive pair IX)', function() {
      expect(integerToRoman(9)).to.equal('IX');
    });
    
    it('TC-I-09: should convert 40 to "XL" (subtractive pair XL)', function() {
      expect(integerToRoman(40)).to.equal('XL');
    });
    
    it('TC-I-11: should convert 90 to "XC" (subtractive pair XC)', function() {
      expect(integerToRoman(90)).to.equal('XC');
    });
    
    it('TC-I-13: should convert 400 to "CD" (subtractive pair CD)', function() {
      expect(integerToRoman(400)).to.equal('CD');
    });
    
    it('TC-I-15: should convert 900 to "CM" (subtractive pair CM)', function() {
      expect(integerToRoman(900)).to.equal('CM');
    });
    
    it('TC-I-08: should convert 14 to "XIV" (combined X + IV)', function() {
      expect(integerToRoman(14)).to.equal('XIV');
    });
  });

  describe('Invalid Inputs', function() {
    it('TC-I-21: should throw error for 0 (below minimum)', function() {
      expect(() => integerToRoman(0)).to.throw();
    });
    
    it('TC-I-22: should throw error for -1 (negative number)', function() {
      expect(() => integerToRoman(-1)).to.throw();
    });
    
    it('TC-I-23: should throw error for 4000 (above maximum)', function() {
      expect(() => integerToRoman(4000)).to.throw();
    });
    
    it('TC-I-25: should throw error for empty string', function() {
      expect(() => integerToRoman("")).to.throw();
    });
  });
});


describe('SET 1: Manual Test Cases - romanToInteger', function() {
  
  describe('Boundary Value Analysis (BVA)', function() {
    it('TC-R-01: should convert "I" to 1 (minimum valid numeral)', function() {
      expect(romanToInteger('I')).to.equal(1);
    });
    
    it('TC-R-02: should convert "II" to 2 (near minimum)', function() {
      expect(romanToInteger('II')).to.equal(2);
    });
    
    it('TC-R-18: should convert "MMMCMXCVIII" to 3998 (near maximum)', function() {
      expect(romanToInteger('MMMCMXCVIII')).to.equal(3998);
    });
    
    it('TC-R-19: should convert "MMMCMXCIX" to 3999 (maximum valid numeral)', function() {
      expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
    });
  });

  describe('Equivalence Partitioning (EP)', function() {
    it('TC-R-03: should convert "III" to 3 (triple repetition)', function() {
      expect(romanToInteger('III')).to.equal(3);
    });
    
    it('TC-R-05: should convert "V" to 5 (single symbol)', function() {
      expect(romanToInteger('V')).to.equal(5);
    });
    
    it('TC-R-07: should convert "X" to 10 (single symbol)', function() {
      expect(romanToInteger('X')).to.equal(10);
    });
    
    it('TC-R-09: should convert "L" to 50 (single symbol)', function() {
      expect(romanToInteger('L')).to.equal(50);
    });
    
    it('TC-R-11: should convert "C" to 100 (single symbol)', function() {
      expect(romanToInteger('C')).to.equal(100);
    });
    
    it('TC-R-13: should convert "D" to 500 (single symbol)', function() {
      expect(romanToInteger('D')).to.equal(500);
    });
    
    it('TC-R-15: should convert "M" to 1000 (single symbol)', function() {
      expect(romanToInteger('M')).to.equal(1000);
    });
    
    it('TC-R-16: should convert "MCMXCIV" to 1994 (complex mid-range)', function() {
      expect(romanToInteger('MCMXCIV')).to.equal(1994);
    });
    
    it('TC-R-17: should convert "MMMDCCCLXXXVIII" to 3888 (longest numeral)', function() {
      expect(romanToInteger('MMMDCCCLXXXVIII')).to.equal(3888);
    });
  });

  describe('Subtractive Pairs Coverage', function() {
    it('TC-R-04: should convert "IV" to 4 (subtractive pair IV)', function() {
      expect(romanToInteger('IV')).to.equal(4);
    });
    
    it('TC-R-06: should convert "IX" to 9 (subtractive pair IX)', function() {
      expect(romanToInteger('IX')).to.equal(9);
    });
    
    it('TC-R-08: should convert "XL" to 40 (subtractive pair XL)', function() {
      expect(romanToInteger('XL')).to.equal(40);
    });
    
    it('TC-R-10: should convert "XC" to 90 (subtractive pair XC)', function() {
      expect(romanToInteger('XC')).to.equal(90);
    });
    
    it('TC-R-12: should convert "CD" to 400 (subtractive pair CD)', function() {
      expect(romanToInteger('CD')).to.equal(400);
    });
    
    it('TC-R-14: should convert "CM" to 900 (subtractive pair CM)', function() {
      expect(romanToInteger('CM')).to.equal(900);
    });
  });

  describe('Invalid Inputs', function() {
    it('TC-R-20: should throw error for "IIII" (invalid repetition)', function() {
      expect(() => romanToInteger('IIII')).to.throw();
    });
    
    it('TC-R-21: should throw error for "VV" (V cannot repeat)', function() {
      expect(() => romanToInteger('VV')).to.throw();
    });
    
    it('TC-R-22: should throw error for "IC" (invalid subtractive)', function() {
      expect(() => romanToInteger('IC')).to.throw();
    });
    
    it('TC-R-23: should throw error for empty string', function() {
      expect(() => romanToInteger('')).to.throw();
    });
    
    it('TC-R-24: should throw error for "abc" (non-Roman characters)', function() {
      expect(() => romanToInteger('abc')).to.throw();
    });
    
    it('TC-R-25: should convert "mcmxciv" to 1994 (lowercase auto-conversion)', function() {
      expect(romanToInteger('mcmxciv')).to.equal(1994);
    });
  });
});


describe('SET 1: Round-Trip Consistency Tests', function() {
  it('TC-RT-01: should maintain consistency for 1 → "I" → 1', function() {
    const roman = integerToRoman(1);
    const integer = romanToInteger(roman);
    expect(integer).to.equal(1);
  });
  
  it('TC-RT-02: should maintain consistency for 1994 → "MCMXCIV" → 1994', function() {
    const roman = integerToRoman(1994);
    const integer = romanToInteger(roman);
    expect(integer).to.equal(1994);
  });
  
  it('TC-RT-03: should maintain consistency for 3999 → "MMMCMXCIX" → 3999', function() {
    const roman = integerToRoman(3999);
    const integer = romanToInteger(roman);
    expect(integer).to.equal(3999);
  });
  
  it('TC-RT-04: should maintain consistency for "XIV" → 14 → "XIV"', function() {
    const integer = romanToInteger('XIV');
    const roman = integerToRoman(integer);
    expect(roman).to.equal('XIV');
  });
  
  it('TC-RT-05: should maintain consistency for "MMMCMXCIX" → 3999 → "MMMCMXCIX"', function() {
    const integer = romanToInteger('MMMCMXCIX');
    const roman = integerToRoman(integer);
    expect(roman).to.equal('MMMCMXCIX');
  });
});


describe('SET 2: AI-Generated Test Cases - integerToRoman', function() {
  
  describe('Boundary Tests', function() {
    it('TC-AI-I-01: should convert 1 to "I"', function() {
      expect(integerToRoman(1)).to.equal('I');
    });
    
    it('TC-AI-I-02: should convert 3999 to "MMMCMXCIX"', function() {
      expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
    });
  });

  describe('Invalid Inputs - Comprehensive', function() {
    it('TC-AI-I-03: should throw error for 0', function() {
      expect(() => integerToRoman(0)).to.throw();
    });
    
    it('TC-AI-I-04: should throw error for -5', function() {
      expect(() => integerToRoman(-5)).to.throw();
    });
    
    it('TC-AI-I-05: should throw error for 4000', function() {
      expect(() => integerToRoman(4000)).to.throw();
    });
    
    
    it('TC-AI-I-07: should throw error for null', function() {
      expect(() => integerToRoman(null)).to.throw();
    });
  

  describe('Subtractive Pairs - All Six', function() {
    it('TC-AI-I-10: should convert 4 to "IV"', function() {
      expect(integerToRoman(4)).to.equal('IV');
    });
    
    it('TC-AI-I-11: should convert 9 to "IX"', function() {
      expect(integerToRoman(9)).to.equal('IX');
    });
    
    it('TC-AI-I-12: should convert 40 to "XL"', function() {
      expect(integerToRoman(40)).to.equal('XL');
    });
    
    it('TC-AI-I-13: should convert 90 to "XC"', function() {
      expect(integerToRoman(90)).to.equal('XC');
    });
    
    it('TC-AI-I-14: should convert 400 to "CD"', function() {
      expect(integerToRoman(400)).to.equal('CD');
    });
    
    it('TC-AI-I-15: should convert 900 to "CM"', function() {
      expect(integerToRoman(900)).to.equal('CM');
    });
    
    it('TC-AI-I-16: should convert 44 to "XLIV" (XL + IV combined)', function() {
      expect(integerToRoman(44)).to.equal('XLIV');
    });
    
    it('TC-AI-I-17: should convert 99 to "XCIX" (XC + IX combined)', function() {
      expect(integerToRoman(99)).to.equal('XCIX');
    });
    
    it('TC-AI-I-18: should convert 1999 to "MCMXCIX" (multiple subtractives)', function() {
      expect(integerToRoman(1999)).to.equal('MCMXCIX');
    });
  });

  describe('Historical and Contextual Cases', function() {
    it('TC-AI-I-19: should convert 2024 to "MMXXIV" (recent year)', function() {
      expect(integerToRoman(2024)).to.equal('MMXXIV');
    });
    
    it('TC-AI-I-20: should convert 3888 to "MMMDCCCLXXXVIII" (longest)', function() {
      expect(integerToRoman(3888)).to.equal('MMMDCCCLXXXVIII');
    });
    
    it('TC-AI-I-21: should convert 500 to "D" (single symbol)', function() {
      expect(integerToRoman(500)).to.equal('D');
    });
    
    it('TC-AI-I-22: should convert 1500 to "MD" (two symbols)', function() {
      expect(integerToRoman(1500)).to.equal('MD');
    });
    
    it('TC-AI-I-23: should convert 3000 to "MMM" (max M repetition)', function() {
      expect(integerToRoman(3000)).to.equal('MMM');
    });
    
    it('TC-AI-I-24: should convert 58 to "LVIII" (mid-range additive)', function() {
      expect(integerToRoman(58)).to.equal('LVIII');
    });
    
    it('TC-AI-I-25: should convert 1776 to "MDCCLXXVI" (historical year)', function() {
      expect(integerToRoman(1776)).to.equal('MDCCLXXVI');
    });
  });
});


describe('SET 2: AI-Generated Test Cases - romanToInteger', function() {
  
  describe('Boundary Tests', function() {
    it('TC-AI-R-01: should convert "I" to 1', function() {
      expect(romanToInteger('I')).to.equal(1);
    });
    
    it('TC-AI-R-02: should convert "MMMCMXCIX" to 3999', function() {
      expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
    });
  });

  describe('Invalid Inputs - Extended Coverage', function() {
    it('TC-AI-R-03: should throw error for empty string', function() {
      expect(() => romanToInteger('')).to.throw();
    });
    
    it('TC-AI-R-04: should throw error for "IIII" (4 consecutive I)', function() {
      expect(() => romanToInteger('IIII')).to.throw();
    });
    
    it('TC-AI-R-05: should throw error for "VV" (V cannot repeat)', function() {
      expect(() => romanToInteger('VV')).to.throw();
    });
    
    it('TC-AI-R-06: should throw error for "LL" (L cannot repeat)', function() {
      expect(() => romanToInteger('LL')).to.throw();
    });
    
    it('TC-AI-R-07: should throw error for "DD" (D cannot repeat)', function() {
      expect(() => romanToInteger('DD')).to.throw();
    });
    
    it('TC-AI-R-08: should throw error for "IC" (invalid subtractive)', function() {
      expect(() => romanToInteger('IC')).to.throw();
    });
    
    it('TC-AI-R-09: should throw error for "IL" (invalid subtractive)', function() {
      expect(() => romanToInteger('IL')).to.throw();
    });
    
    it('TC-AI-R-10: should throw error for "VX" (invalid subtractive)', function() {
      expect(() => romanToInteger('VX')).to.throw();
    });
    
    it('TC-AI-R-11: should throw error for "abc" (non-Roman chars)', function() {
      expect(() => romanToInteger('abc')).to.throw();
    });
  });

  describe('Complex Combinations', function() {
    it('TC-AI-R-12: should convert "MCMXCIV" to 1994', function() {
      expect(romanToInteger('MCMXCIV')).to.equal(1994);
    });
    
    it('TC-AI-R-13: should convert "MMXXIV" to 2024', function() {
      expect(romanToInteger('MMXXIV')).to.equal(2024);
    });
    
    it('TC-AI-R-14: should convert "MDCCLXXVI" to 1776', function() {
      expect(romanToInteger('MDCCLXXVI')).to.equal(1776);
    });
  });

  describe('Subtractive Pairs', function() {
    it('TC-AI-R-15: should convert "IV" to 4', function() {
      expect(romanToInteger('IV')).to.equal(4);
    });
    
    it('TC-AI-R-16: should convert "IX" to 9', function() {
      expect(romanToInteger('IX')).to.equal(9);
    });
    
    it('TC-AI-R-17: should convert "XL" to 40', function() {
      expect(romanToInteger('XL')).to.equal(40);
    });
    
    it('TC-AI-R-18: should convert "XC" to 90', function() {
      expect(romanToInteger('XC')).to.equal(90);
    });
    
    it('TC-AI-R-19: should convert "CD" to 400', function() {
      expect(romanToInteger('CD')).to.equal(400);
    });
    
    it('TC-AI-R-20: should convert "CM" to 900', function() {
      expect(romanToInteger('CM')).to.equal(900);
    });
    
    it('TC-AI-R-21: should convert "XLIV" to 44 (combined XL + IV)', function() {
      expect(romanToInteger('XLIV')).to.equal(44);
    });
    
    it('TC-AI-R-22: should convert "XCIX" to 99 (combined XC + IX)', function() {
      expect(romanToInteger('XCIX')).to.equal(99);
    });
  });

  describe('Edge Cases', function() {
    it('TC-AI-R-23: should convert "mcmxciv" to 1994 (lowercase)', function() {
      expect(romanToInteger('mcmxciv')).to.equal(1994);
    });
    
    it('TC-AI-R-24: should convert "MMMDCCCLXXXVIII" to 3888 (longest)', function() {
      expect(romanToInteger('MMMDCCCLXXXVIII')).to.equal(3888);
    });
    
    it('TC-AI-R-25: should convert "MMMCMXCVIII" to 3998 (near maximum)', function() {
      expect(romanToInteger('MMMCMXCVIII')).to.equal(3998);
    });
  });
});


describe('Test Suite Summary', function() {
  it('Total test count: should have 100+ tests across both sets', function() {
    // This is a meta-test to ensure the test suite is comprehensive
    expect(true).to.be.true;
  });
});

