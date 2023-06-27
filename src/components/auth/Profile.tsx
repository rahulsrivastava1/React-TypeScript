export type ProfileProps = {
  name: string;
};

const Profile = (props: ProfileProps) => {
  return <div>Private Profile Component. Name is {props.name}</div>;
};

export default Profile;
