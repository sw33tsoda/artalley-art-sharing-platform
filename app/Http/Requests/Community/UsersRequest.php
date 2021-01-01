<?php

namespace App\Http\Requests\Community;

use Illuminate\Foundation\Http\FormRequest;

class UsersRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'firstname' => 'required|min:2|max:30',
            'lastname' => 'required|min:2|max:30',
            'username' => 'required|min:2|max:30',
            'email' => 'required|email|max:60',
            'password' => 'nullable|min:8|max:64',
            'bio' => 'nullable|min:2|max:500',
            'twitter' => 'nullable|min:2|max:64',
            'facebook' => 'nullable|min:2|max:64',
            // 'profile_picture' => 'nullable|max:2048|file|mimes:jpeg,jpg', bất đồng với frontend
            // 'banner' => 'nullable|max:2048|file|mimes:jpeg,jpg',
        ];
    }

    public function messages()
    {
        return [
            '*.required' => 'Không được bỏ trống',
            'min' => 'Tối thiểu :min ký tự',
            'max' => 'Không được vượt quá :max',
            'password.max' => 'Mật khẩu quá dài',
            'email' => 'Sai định dạng email',
            'nullable' => 'Không được null',
            'file' => 'File tải lên không hợp lệ',
            'mimes' => 'Định dạng cho phép : .JPEG, .JPG',
        ];
    }
}
