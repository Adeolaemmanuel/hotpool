// ** Custom Components
import Avatar from '@components/avatar'

// ** Avatar Image
import avatarImg from '@src/assets/images/avatars/avatar-blank.png'

const AvatarSizes = () => {
  return (
    <div className='demo-inline-spacing'>
      <Avatar img={avatarImg} size='sm' />
      <Avatar img={avatarImg} />
      <Avatar img={avatarImg} size='lg' />
      <Avatar img={avatarImg} size='xl' />
    </div>
  )
}
export default AvatarSizes
