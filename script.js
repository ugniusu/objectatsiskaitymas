for (let i = 0; i<knygos.length; i++) {
    const knyga = knygos[i]
    console.log(`Knyga ${i + 1}`)
    for (let a in knyga) {
      const propType = typeof knyga[a]
  
      if (a === 'object') {
        console.log(`${a} yra objektas:`)
      }
      for (const nestedA in knyga[a]) {
        console.log(`${nestedA}: ${knyga[a][nestedA]}`)
      }
    }
  }