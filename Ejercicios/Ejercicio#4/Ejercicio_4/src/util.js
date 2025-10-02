export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

export default function Profile() {
  return (
    <div>
      {/* Primer Avatar: Pasa size (número) y person (objeto) */}
      <Avatar
        size={100}
        person={{
          name: 'Katsiko Saruhashi',
          imageId: 'Yfe0oq2'
        }}
      />
      
      {/* Segundo Avatar */}
      <Avatar
        size={80}
        person={{
          name: 'Akililu Lemma',
          imageId: 'OKS6Y1A'
        }}
      />
      
      {/* Tercer Avatar */}
      <Avatar
        size={50}
        person={{
          name: 'Lin Lanying',
          imageId: '1HXS0H6'
        }}
      />
    </div>
  );
}