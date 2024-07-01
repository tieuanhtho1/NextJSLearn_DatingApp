import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react'
import { Session } from 'next-auth'
import React from 'react'

type Props = {
    user: Session['user']
}

export default function UserMenu({user}: Props) {
  return (
    <Dropdown placement='bottom-end'>
        <DropdownTrigger>
            <Avatar 
                isBordered
                as='button'
                className='transition-transform'
                color='secondary'
                name={user?.name || 'user avatar'}
                size='sm'
                src={user?.image || '/image/user.png'}
            />
        </DropdownTrigger>
        <DropdownMenu variant='flat' aria-label='User action menu'>
            <DropdownSection showDivider>
                <DropdownItem isReadOnly as='span' className='h-14 flex flex-row' aria-label='username'>
                    
                </DropdownItem>
            </DropdownSection>
        </DropdownMenu>
    </Dropdown>
  )
}
