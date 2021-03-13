# SQL to TS

### Convert create table statement to typescript interface

# Example

### [Try it Online](https://zhenhuaa.github.io/sql2ts/)
### Input

```sql
CREATE TABLE `profile` (
  `roleId` bigint(20) NOT NULL COMMENT 'playerId',
  `location` varchar(50) DEFAULT NULL COMMENT 'country-province-city',
  `signature` varchar(100) DEFAULT NULL COMMENT 'signature text',
  `avatar` varchar(255) DEFAULT NULL COMMENT 'user avatar url',
  PRIMARY KEY (`RoleId`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='user profile';
```

### Output:
```typescript
/** user profile */
interface profile {
  /** playerId */
  roleId: number
  /** country-province-city */
  location: string
  /** signature text */
  signature: string
  /** user avatar url */
  avatar: string
}
```