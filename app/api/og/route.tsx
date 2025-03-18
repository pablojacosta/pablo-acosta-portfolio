import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            position: 'relative',
          }}
        >
          {/* Gradient Background */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'radial-gradient(circle at top left, rgba(142, 202, 230, 0.2), transparent)',
              zIndex: 0,
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              padding: '40px',
              zIndex: 1,
              width: '100%',
            }}
          >
            {/* Title */}
            <h1
              style={{
                fontSize: 60,
                fontWeight: 'bold',
                color: '#fff',
                marginBottom: 20,
                lineHeight: 1.1,
              }}
            >
              Pablo Jesus Acosta
            </h1>
            <h2
              style={{
                fontSize: 40,
                color: '#8ECAE6',
                marginBottom: 40,
              }}
            >
              Full Stack Developer
            </h2>

            {/* Tech Stack */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                maxWidth: '800px',
              }}
            >
              {[
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'Tailwind',
                'SASS',
                'MongoDB',
              ].map(tech => (
                <div
                  key={tech}
                  style={{
                    backgroundColor: 'rgba(142, 202, 230, 0.1)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    color: '#8ECAE6',
                    fontSize: 24,
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response('Failed to generate image', { status: 500 });
  }
}
