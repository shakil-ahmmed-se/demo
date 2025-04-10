

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Undo,
  Redo,
  Bold,
  Italic,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Link,
  Image,
  Code,
  Strikethrough,
} from 'lucide-react';

const comments = [
    {
      id: 1,
      author: 'TA',
      avatarColor: 'bg-blue-500',
      text: 'Random comment for this response. We need to work on that quickly',
      timestamp: '12 oct 8:00pm',
    },
    {
      id: 2,
      author: 'ZA',
      avatarColor: 'bg-orange-500',
      text: 'Random comment for this response. We need to work on that quickly',
      timestamp: '14 oct 8:00pm',
    },
    {
      id: 3,
      author: 'TA',
      avatarColor: 'bg-blue-500',
      text: 'Random comment for this response. We need to work on that quickly',
      timestamp: '21 oct 8:00pm',
    },
    {
      id: 4,
      author: 'TA',
      avatarColor: 'bg-blue-500',
      text: 'Random comment for this response. We need to work on that quickly',
      timestamp: '21 oct 8:00pm',
    },
  ];

const AllComments = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [newComment, setNewComment] = useState('');



  const handleAddCommentClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewComment('');
  };

  const handleAddComment = () => {
   
    console.log('New comment:', newComment);
    setIsEditing(false);
    setNewComment('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md py-5 mb-5 mx-8 drop-shadow-2xl mt-10 px-5 overflow-hidden">
      <h3 className="text-lg font-semibold mb-4">All Comments</h3>

      {/* Comment List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-3">
            <div
              className={`w-8 h-8 ${comment.avatarColor} rounded-full flex items-center justify-center text-white font-semibold`}
            >
              {comment.author}
            </div>
            <div className="flex-1">
              <p className="text-gray-800">{comment.text}</p>
              <p className="text-gray-500 text-sm">{comment.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

     
      {!isEditing ? (
        <Button
          onClick={handleAddCommentClick}
          className="mt-4 bg-blue-500 hover:bg-blue-600"
        >
          Add Comment
        </Button>
      ) : (
        <div className="mt-4">
          <div className="bg-gray-100 rounded-lg p-2">
            <div className="flex space-x-2 mb-2">
              <Button variant="ghost" size="icon">
                <Undo className="w-5 h-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <Redo className="w-5 h-5 text-gray-600" />
              </Button>
              <Select defaultValue="normal">
                <SelectTrigger className="w-[120px] bg-transparent border-none text-gray-600">
                  <SelectValue placeholder="Normal text" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal text</SelectItem>
                  <SelectItem value="heading1">Heading 1</SelectItem>
                  <SelectItem value="heading2">Heading 2</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="ghost" size="icon">
                <Bold className="w-5 h-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <Italic className="w-5 h-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <AlignLeft className="w-5 h-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <AlignCenter className="w-5 h-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <AlignRight className="w-5 h-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <List className="w-5 h-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <Link className="w-5 h-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <Image className="w-5 h-5 text-gray-600"  />
              </Button>
              <Button variant="ghost" size="icon">
                <Code className="w-5 h-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <Strikethrough className="w-5 h-5 text-gray-600" />
              </Button>
            </div>
            <Textarea
              className="w-full bg-transparent border-none focus:ring-0 text-gray-800 resize-none"
              rows={3}
              placeholder="Have you tried turning your phone off and on again?"
              value={newComment}
              onChange={(e: any) => setNewComment(e.target.value)}
            />
          </div>

          <div className="flex justify-end space-x-2 mt-2">
            <Button
              onClick={handleAddComment}
              className="bg-[#238DB2] hover:bg-blue-300 cursor-pointer"
            >
              Add Comment
            </Button>
            <Button variant="ghost" onClick={handleCancelClick}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllComments;