const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Don Lancaster',
    position: 'American author',
    photo:
      'https://alchetron.com/cdn/don-lancaster-ae6b1e56-33fc-4b68-ab0f-4f7c2f5d22d-resize-750.jpeg',
    text:
      "Most impossible goals can be met simply by breaking them down into bite size chunks, writing them down, believing them and going full speed ahead as if they were routine.",
  },
  {
    name: 'Mario Cuomo',
    position: 'lawyer and politician',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Mario_Cuomo_1987_%28cropped%29.jpg',
    text:
      'There are only two rules for being successful. One, figure out exactly what you want to do, and two, do it.',
  },
  {
    name: ' Theodore Roosevelt',
    position: 'USA Vice Presiden',
    photo: 'data:image/jpeg;base64,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',
    text:
      "Be practical as well as generous in your ideals. Keep your eyes on the stars, but remember to keep your feet on the ground.",
  },
  {
    name: 'Samuel Beckett',
    position: 'Irish novelist',
    photo: 'https://thesamuelbeckettsociety.files.wordpress.com/2019/09/samuel-beckett-1964_.jpg?w=432',
    text:
      "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
  },
  {
    name: 'Robert Kiyosaki',
    position: 'businessman',
    photo: 'https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2ExNGEzMGI4NGVmNGY2MDYxNWY1NjM0ZGQwNTY1OGRmLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D',
    text:
      "The only difference between a rich person and a poor person is how they use their time.",
  },
  {
    name: 'Warren Buffet',
    position: 'businessman',
    photo:
      'https://profile-images.xing.com/images/3c3798729a2682d39a58cb80ca69f8b1-1/warren-buffett.256x256.jpg',
    text:
      'If you don’t find a way to make money while you sleep, you will work until you die.',
  },
  {
    name: 'Jeff Bezos',
    position: 'businessman',
    photo: 'https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg',
    text:
      'There are two kinds of companies, those that work to try to charge more and those that work to charge less. We will be the second',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
