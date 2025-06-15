// About component displays a styled section explaining what Learning Support Providers do.
// It includes a title and descriptive text within a bordered container aligned to the top-left of the page.

function About() {
  return (
    <div className="min-h-screen bg-white flex items-start justify-start px-12 py-20">
      <div className="border border-gray-300 p-6 max-w-3xl">
        <h1 className="text-3xl font-semibold text-gray-700 mb-4">
          About Learning Support Providers
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Learning Support Providers offer personalized guidance for children
          with ADHD, autism, dyslexia, and other learning differences. They
          support both academic progress and emotional well-being — helping each
          child unlock their full potential.
        </p>
      </div>
    </div>
  );
}

export default About;
