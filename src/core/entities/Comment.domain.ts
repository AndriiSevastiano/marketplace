import { BaseDomain } from './Base.domain';
import { UserDomain } from './User.domain';

export  class CommentDomain extends BaseDomain {
   comment_body: string;
   like_count?: number;
   dislike_count?: number;
   User?: UserDomain | number;
}
