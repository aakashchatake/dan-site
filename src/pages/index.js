import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  return (
    <Layout
      title="Data Analytics Portal"
      description="Transparent, reproducible, agent-friendly learning"
    >
      <main className="homepage">
        {/* HERO */}
        <section className="intro-block" style={{ paddingTop: '2.5rem' }}>
          <img
            src={useBaseUrl('img/akashchatake.jpg')}
            alt="Akash Shivadas Chatake"
            className="profile-img"
          />
          <div className="intro-text">
            <h1 style={{ marginBottom: '0.5rem' }}>Mindforge • Data Analytics</h1>
            <p className="highlight-red" style={{ marginBottom: '1rem' }}>
              Transparent, reproducible learning—grounded in real practice.
            </p>
            <p>
              Build mastery in statistics, Python, visualization, and machine
              learning with clean explanations, examples, and assessments.
            </p>
            <div
              style={{
                marginTop: '1rem',
                display: 'flex',
                gap: '.75rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link className="button button--primary" to={useBaseUrl('unit01')}>
                Start Unit 1
              </Link>
              <Link className="button button--secondary" to={useBaseUrl('assessments')}>
                Assessments
              </Link>
              <Link className="button button--secondary" to={useBaseUrl('practicals')}>
                Practicals
              </Link>
            </div>
          </div>
        </section>

        {/* COVER / BRAND VISUAL */}
        <section className="cover">
          <img
            src={useBaseUrl('img/entropy.jpg')}
            alt="Mindforge Cover"
            className="cover-img"
          />
        </section>

        {/* VALUE PROPS */}
        <section className="why-analytics">
          <h2>Why this portal works</h2>
          <ul style={{ margin: 0, paddingLeft: '1rem' }}>
            <li>
              <span className="highlight-pill">Clarity</span> — concise theory with worked examples.
            </li>
            <li>
              <span className="highlight-pill">Reproducibility</span> — code, datasets, and versioned notes.
            </li>
            <li>
              <span className="highlight-pill">Assessment</span> — unit-wise tests, orals, and prelims.
            </li>
            <li>
              <span className="highlight-pill">Practice</span> — practicals and microprojects with instructor guides.
            </li>
          </ul>
        </section>

        {/* UNITS / NAV GRID */}
        <section className="explore-portal">
          <h2>Explore the Portal</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
              gap: '0.75rem',
            }}
          >
            <Card title="Unit 1–5" to="unit01" desc="Syllabus-aligned notes & scripts." />
            <Card title="Practicals" to="practicals" desc="Datasets, steps, outcomes, metadata." />
            <Card title="Assessments" to="assessments" desc="Assignments, tests, prelims with solutions." />
            <Card
              title="Lecture Archive"
              href="https://chatakeedusphere.sharepoint.com/:f:/s/DATAANALYTICS/Ehz-dQUmGt1Nn2piFWDCKgEBfTc5cfKgOxyWOuqFJXVPMQ?e=Pt9U3r"
              external
              desc="Slides, recordings & materials."
            />
          </div>
        </section>

        {/* FEATURED READING / COMMUNITY */}
        <section className="explore-portal">
          <h2>Featured & Community</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '.5rem' }}>
              <a
                href="https://mindforgeai.wordpress.com/2025/06/03/entropy-the-silent-architect-of-time-thought-and-the-cosmos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                📂 Mindforge Article: Entropy
              </a>
            </li>
            <li style={{ marginBottom: '.5rem' }}>
              <a href="https://mindforgeai.wordpress.com/about/" target="_blank" rel="noopener noreferrer">
                🌐 About Mindforge
              </a>
            </li>
            <li style={{ marginBottom: '.5rem' }}>
              <a
                href="https://teams.microsoft.com/l/team/19%3AQV7eesuvh2MSQJOS-1hKWHl13i22WqQcxC-vW3dgzSQ1%40thread.tacv2/conversations?groupId=cba02c1e-dd92-4e1e-b217-3d55af5f0f21&tenantId=6b08a6ba-973d-4a9a-b855-91f27bac00e6"
                target="_blank"
                rel="noopener noreferrer"
              >
                👥 Join Our Teams Group
              </a>
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}

/** Small card component for the grid */
function Card({ title, to, href, external = false, desc }) {
  const content = (
    <div
      style={{
        background: '#fff',
        borderRadius: 8,
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        height: '100%',
      }}
    >
      <h3 style={{ marginTop: 0, color: 'var(--mf-red)' }}>{title}</h3>
      <p style={{ marginBottom: 0 }}>{desc}</p>
    </div>
  );

  if (href || external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {content}
      </a>
    );
  }
  return (
    <Link to={useBaseUrl(to)} style={{ textDecoration: 'none' }}>
      {content}
    </Link>
  );
}
