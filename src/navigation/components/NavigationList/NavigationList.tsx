import {NavigationListProps} from '../../models';
import NavigationListItem from '../NavigationListItem/NavigationListItem';

export const NavigationList = ({
    className,
    itemClassName,
    items,
    ...props
}: NavigationListProps) => (
    <ul className={className}>
        {items.map((item, index) => (
            <NavigationListItem
                key={index}
                index={index}
                data={item}
                className={itemClassName}
                {...props}
            />
        ))}
    </ul>
);
