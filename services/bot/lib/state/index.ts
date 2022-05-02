import type {RedisClientType} from 'redis';

import {AbusiveUserState} from './abusiveUser';
import {CheckMembersButtonState} from './checkMembersButton';
import {GuildConfigState} from './guildConfig';

export * from './abusiveUser';
export * from './checkMembersButton';

export class State {
  constructor(private client: RedisClientType) {}

  abusiveUser = new AbusiveUserState(this.client);
  checkMembersButton = new CheckMembersButtonState(this.client);
  guildConfig = new GuildConfigState(this.client);
}
