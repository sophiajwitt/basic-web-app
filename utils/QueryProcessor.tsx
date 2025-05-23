export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "Sophia"
    );
  }

  if (query.toLowerCase().includes("what is your andrew id?")) {
    return (
      "switt"
    );
  }
  
  if (query.toLowerCase().includes("did you eat breakfast?")) {
    return (
      "yes I had cereal"
    );
  }

  if (query.toLowerCase().includes("this is a test")) {
    return (
      "test"
    );
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest:")) {
    const query_array = query.toLowerCase().split(" ");
    const num_one = parseInt(query_array[8].substring(0, query_array[8].length - 1));
    const num_two = parseInt(query_array[9].substring(0, query_array[9].length - 1));
    const num_three = parseInt(query_array[10].substring(0, query_array[10].length - 1));
    return (
      (Math.max(num_one, num_two, num_three).toString())
    );
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    const query_array = query.toLowerCase().split(" ");
    const num_one = parseInt(query_array[2]);
    const num_two = parseInt(query_array[4]);
    const num_three = parseInt(query_array[6]);
    return (
      (num_one + num_two + num_three).toString()
    );
  }

  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube:")) {
    const query_array = query.toLowerCase().split(" ");
    const num_one = parseInt(query_array[13]);
    const num_two = parseInt(query_array[14]);
    const num_three = parseInt(query_array[15]);
    const num_four = parseInt(query_array[16]);
    const num_five = parseInt(query_array[17]);
    const num_six = parseInt(query_array[18]);
    const num_seven = parseInt(query_array[19]);
    const num_array = [num_one, num_two, num_three, num_four, num_five, num_six, num_seven];
    let answer: number[] = [];
    for (let i = 0; i < num_array.length; i++) {
      const num = num_array[i];
      if (isSquareAndCube(num)) {
        answer.push(num);
      }
    }
    return (
      answer.toString()
    );
  }

  function isSquareAndCube(num: number) {
    // Check if num is a perfect square
    const squareRoot = Math.sqrt(num);
    if (Math.floor(squareRoot) ** 2 !== num) {
      return false;
    }
  
    // Check if num is a perfect cube
    const cubeRoot = Math.cbrt(num);
    if (Math.floor(cubeRoot) ** 3 !== num) {
      return false;
    }
  
    // If both tests pass, num is both a square and a cube
    return true;
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("minus")) {
    const query_array = query.toLowerCase().split(" ");
    const num_one = parseInt(query_array[2]);
    const num_two = parseInt(query_array[4]);
    return (
      (num_one - num_two).toString()
    );
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("multiplied by")) {
    const query_array = query.toLowerCase().split(" ");
    const num_one = parseInt(query_array[2]);
    const num_two = parseInt(query_array[5]);
    return (
      (num_one * num_two).toString()
    );
  }
  if (query.toLowerCase().includes("which of the following numbers are primes:")) {
    const query_array = query.toLowerCase().split(" ");
    const num_one = parseInt(query_array[7]);
    const num_two = parseInt(query_array[8]);
    const num_three = parseInt(query_array[9]);
    const num_four = parseInt(query_array[10]);
    const num_five = parseInt(query_array[11]);
    const num_array = [num_one, num_two, num_three, num_four, num_five];
    let answer: number[] = [];
    for (let i = 0; i < num_array.length; i++) {
      const num = num_array[i];
      if (isPrime(num)) {
        answer.push(num);
      }
    }
    return (
      answer.toString()
    );
  }

  function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("to the power of")) {
    const query_array = query.toLowerCase().split(" ");
    const num_one = parseInt(query_array[2]);
    const num_two = parseInt(query_array[7]);
    return (
      (num_one ** num_two).toString()
    );
  }


  return "";
}

  
