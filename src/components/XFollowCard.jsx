export default function XFollowCard({userName, name, isFollowing}) {
 const imageSrc = `https://unavatar.io/${userName}`

  return (
    <div>
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img
          className='tw-followCard-avatar'
          src={imageSrc} alt={userName} />
          <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-infoUserName'>@{userName}</span>
          </div>
        </header>

        <aside>
          <button className='tw-followCard-button is-followingw'>
            Seguir
          </button>
        </aside>
      </article>
    </div>
  )
}

