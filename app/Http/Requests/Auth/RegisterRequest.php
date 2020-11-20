<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'password' => 'required|min:8|max:64',
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
        ];
    }
}
