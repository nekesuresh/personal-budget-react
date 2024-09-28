function Homepage() {
    return (
        <section className="container center">
        <div className="page-area">

            {/* This is a Semantic HTML Change */}
            <figure>
                <img src="https://thebudgeting.app/_next/static/media/logo.1604ed5c.webp" alt="App logo" width="100" height="100" />
                <figcaption>Don't let money scare you! You got this!</figcaption>
            </figure>

            {/* This is an A11y Change */}
            <article className="text-box" aria-labelledby="stay-on-track">
                <h2 id="stay-on-track">Stay on track</h2>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            {/* This is an A11y Change */}
            <article className="text-box" aria-labelledby="alerts">
                <h2 id="alerts">Alerts</h2>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            {/* This is an A11y Change */}
            <article className="text-box" aria-labelledby="results">
                <h2 id="results">Results</h2>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article className="text-box" aria-labelledby="free">
                <h2 id="free">Free</h2>
                <p>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </p>
            </article>

            <article className="text-box" aria-labelledby="bar-chart">
                <h2 id="bar-chart">Budget Overview</h2>
                <div id="d3Chart"></div>
                <button className="randomize">randomize</button>
            </article>

        </div>
    </section>
    );
  }
  
  export default Homepage;
